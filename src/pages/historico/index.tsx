import { useLocation } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'

import Header from '../../containers/header'
import Footer from '../../containers/footer'
import FormModel from '../../components/Forms'
import HeaderDashboard from '../../containers/headerDashboard'
import ListDashboard from '../../containers/listDashboard'
import InputMoeda from '../../components/InputMoeda'
import SelectCategorias from '../../components/SelectCategorias'
import Button from '../../components/Button'
import Filter, { Filters } from '../../components/Filter'
import Loader from '../../components/Loader'
import Error from '../../components/Error'

import { useGetHistoricoQuery } from '../../service/Hooks/userAPI'
import {
  useGetCategorysQuery,
  usePostCategoryMutation
} from '../../service/Hooks/categoryAPI'
import {
  useDeleteTransactionMutation,
  usePostTransactionMutation,
  usePutTransactionMutation
} from '../../service/Hooks/transactionAPI'

import { MainDashboard } from '../../styles'
import { useGetGoalsQuery } from '../../service/Hooks/GoalAPI'

type TransactionType = 'gasto' | 'ganho'

const Historico = () => {
  const {
    data: transactions,
    isLoading: loadingHistorico,
    refetch: refetchHistorico
  } = useGetHistoricoQuery()
  const { data: categorys, isLoading: loadingCategorias } =
    useGetCategorysQuery()
  const { data: Goals, isLoading: loadingGoals } = useGetGoalsQuery()
  usePostCategoryMutation()
  const [postTransaction, { isLoading: loadingTransaction }] =
    usePostTransactionMutation()
  const [putTransaction, { isLoading: loadingEditTransaction }] =
    usePutTransactionMutation()
  const [deletTransaction, { isLoading: loadingDeletTransaction }] =
    useDeleteTransactionMutation()
  const location = useLocation()

  const [formActive, setFormActive] = useState<'add' | 'edit'>()
  const [type, setType] = useState<TransactionType>('gasto')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')
  const [id, setId] = useState<number>()
  const [erro, setErro] = useState('')
  const [metaId, setMetaId] = useState(0)

  const [filters, setFilters] = useState<Filters>({
    categoria: '',
    categoryAtivo: false,
    dateAtivo: false,
    inicio: '',
    fim: ''
  })
  const [filtersActive, setFiltersActive] = useState(false)
  const [filteredTransactions, setFilteredTransactions] = useState(transactions)

  const isLoading =
    loadingHistorico ||
    loadingTransaction ||
    loadingEditTransaction ||
    loadingDeletTransaction ||
    loadingCategorias ||
    loadingGoals

  const labelToGoalId = useMemo(() => {
    const map: Record<string, number> = {}
    Goals?.forEach((goal) => {
      map['Meta: ' + goal.name] = goal.id
    })
    return map
  }, [Goals])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (category == '' || value == 0 || date == '') {
      setErro('Todos os campos são obrigatórios')
      return
    }
    try {
      const tran: TransactionReq = {
        category,
        date,
        type,
        value,
        ...(metaId !== 0 && { goal_id: metaId })
      }
      await postTransaction(tran).unwrap()
      await refetchHistorico()

      handleClose()
    } catch (err: unknown) {
      let msg = 'Erro ao adicionar.'

      if (
        typeof err === 'object' &&
        err !== null &&
        'data' in err &&
        typeof (err as { data?: unknown }).data === 'object' &&
        (err as { data?: { detail?: string } }).data?.detail
      ) {
        msg += ' ' + (err as { data: { detail: string } }).data.detail
      }

      setErro(msg)
    }
  }

  const handleEdit = (item: Transaction) => {
    setDate(item.date)
    setCategory(item.category)
    setType(item.type)
    setValue(item.value)
    setId(item.id)

    const idMeta = labelToGoalId[item.category] ?? 0
    setMetaId(idMeta)

    setFormActive('edit')
  }

  const handleEditSubmit = async (
    id: number | undefined,
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    if (category == '' || value == 0 || date == '') {
      setErro('Todos os campos são obrigatórios')
      return
    }
    try {
      if (id) {
        const tran: TransactionReq = {
          category,
          date,
          type,
          value,
          ...(metaId !== 0 && { goal_id: metaId })
        }
        await putTransaction({
          data: tran,
          id
        }).unwrap()
        await refetchHistorico()

        handleClose()
      }
    } catch (err) {
      let msg = 'Erro ao adicionar.'

      if (
        typeof err === 'object' &&
        err !== null &&
        'data' in err &&
        typeof (err as { data?: unknown }).data === 'object' &&
        (err as { data?: { detail?: string } }).data?.detail
      ) {
        msg += ' ' + (err as { data: { detail: string } }).data.detail
      }

      setErro(msg)
    }
  }

  const handleDelete = async (id: number | undefined) => {
    try {
      if (id) {
        await deletTransaction(id).unwrap()
        await refetchHistorico()
        handleClose()
      } else {
        setErro('Erro ao acessar o Id, Tente novamente')
      }
    } catch (err) {
      let msg = 'Erro ao adicionar.'

      if (
        typeof err === 'object' &&
        err !== null &&
        'data' in err &&
        typeof (err as { data?: unknown }).data === 'object' &&
        (err as { data?: { detail?: string } }).data?.detail
      ) {
        msg += ' ' + (err as { data: { detail: string } }).data.detail
      }

      setErro(msg)
    }
  }

  const handleClose = () => {
    setFormActive(undefined)
    setErro('')
    setDate('')
    setCategory('')
    setType('gasto')
    setValue(0)
  }

  useEffect(() => {
    const aplicarFiltros = () => {
      let filtradas: Transaction[] = []
      if (transactions) {
        filtradas = [...transactions]
      }

      if (filtersActive) {
        const { categoryAtivo, categoria, dateAtivo, inicio, fim } = filters

        if (
          categoryAtivo &&
          typeof categoria === 'string' &&
          categoria.trim() !== ''
        ) {
          filtradas = filtradas.filter((t) => t.category === categoria)
        }

        if (
          dateAtivo &&
          typeof inicio === 'string' &&
          typeof fim === 'string' &&
          inicio.trim() !== '' &&
          fim.trim() !== ''
        ) {
          filtradas = filtradas.filter(
            (t) =>
              new Date(t.date) >= new Date(inicio) &&
              new Date(t.date) <= new Date(fim)
          )
        }
      }

      setFilteredTransactions(filtradas)
    }

    aplicarFiltros()
  }, [transactions, filtersActive, filters])

  useEffect(() => {
    const inicializaForm = () => {
      const formActiveFromLocation = location.state?.formActive
      if (formActiveFromLocation === 'add') {
        setFormActive('add')
        window.history.replaceState({}, document.title)
      }
    }
    inicializaForm()
  }, [location.state?.formActive])

  useEffect(() => {
    if (category && labelToGoalId[category]) {
      setMetaId(labelToGoalId[category])
    } else {
      setMetaId(0)
    }
  }, [category, labelToGoalId])

  return (
    <MainDashboard>
      <Header page="MainPage" />
      <section>
        <HeaderDashboard
          name="Histórico"
          onFilter={setFiltersActive}
          onAdd={() => setFormActive('add')}
          navFilter={
            <Filter
              hasCategory
              hasDate
              onChange={(filtros) => setFilters(filtros)}
              categorys={categorys ? categorys : []}
            />
          }
        />
        <ListDashboard
          itenList={filteredTransactions ? filteredTransactions : []}
          name="Histórico"
          onEdit={(item) => handleEdit(item)}
        />
      </section>
      <FormModel
        onClose={handleClose}
        title={
          formActive === 'add' ? 'Adicionar Transação' : 'Editar Transação'
        }
        isModal
        active={formActive === 'add' || formActive === 'edit'}
        onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
          formActive === 'add' ? handleSubmit(e) : handleEditSubmit(id, e)
        }
      >
        <>
          <div className="inputDiv">
            <label htmlFor="valor">Valor: </label>
            <InputMoeda onChange={(v) => setValue(v)} value={value} />
          </div>
          <div className="inputDiv">
            <label htmlFor="categorias">Categorias: </label>
            <SelectCategorias
              onChange={(v, id) => {
                setCategory(v)
                setMetaId(id ?? 0)
              }}
              value={category}
            />
          </div>
          <div className="inputDiv">
            <label htmlFor="date">Data: </label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              max={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div className="inputDiv">
            <label htmlFor="type">tipo: </label>
            <select
              name="type"
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value as TransactionType)}
            >
              <option value="gasto">Gasto</option>
              <option value="ganho">Ganho</option>
            </select>
          </div>
          {formActive === 'edit' ? (
            <div className="buttons">
              <Button color="green" type="submit">
                <>Salvar Edição</>
              </Button>
              <Button
                onClick={() => handleDelete(id)}
                color="red"
                type="button"
              >
                <>Deletar</>
              </Button>
            </div>
          ) : (
            <Button color="green" type="submit">
              <>Salvar</>
            </Button>
          )}
          <Error msg={erro} />
        </>
      </FormModel>
      <Footer />
      <Loader type="historico" active={isLoading} />
    </MainDashboard>
  )
}

export default Historico
