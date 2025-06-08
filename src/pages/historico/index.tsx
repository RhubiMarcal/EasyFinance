import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Header from '../../containers/header'
import Footer from '../../containers/footer'
import DashboardSection from '../../containers/DashboardSection'
import FormModel from '../../components/Forms'
import InputMoeda from '../../components/InputMoeda'
import SelectCategorias from '../../components/SelectCategorias'
import Button from '../../components/Button'
import Filter from '../../components/Filter'
import Loader from '../../components/Loader'

import {
  useGetHistoricoQuery,
  usePostCategoryMutation,
  usePostTransactionMutation,
  usePutTransactionMutation,
  useDeleteTransactionMutation
} from '../../service/api'

import {
  addToCategory,
  addToHistorico,
  deleteTransaction,
  setHistorico
} from '../../store/reducers/user'

type TransactionType = 'gasto' | 'ganho'

type Filters = {
  categoryAtivo: boolean
  categoria: string
  dateAtivo: boolean
  inicio: string
  fim: string
}

const Historico = () => {
  const { data, isLoading: loadingHistorico } = useGetHistoricoQuery()
  const [postCategory, { isLoading: loadingCategoria }] =
    usePostCategoryMutation()
  const [postTransaction, { isLoading: loadingTransaction }] =
    usePostTransactionMutation()
  const [putTransaction, { isLoading: loadingEditTransaction }] =
    usePutTransactionMutation()
  const [deletTransaction, { isLoading: loadingDeletTransaction }] =
    useDeleteTransactionMutation()

  const dispatch = useDispatch()
  const { transactions, categorys } = useSelector(
    (state: RootReducer) => state.user
  )
  const location = useLocation()
  const state = location.state as { formActive?: 'add' | 'edit' }

  const [formActive, setFormActive] = useState<'add' | 'edit'>()
  const [type, setType] = useState<TransactionType>('gasto')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')
  const [id, setId] = useState<number>()

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
    loadingCategoria ||
    loadingTransaction ||
    loadingEditTransaction ||
    loadingDeletTransaction

  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const categoriaExiste = categorys.some(
        (c) => c.name.toLowerCase() === category.toLowerCase()
      )

      const nomeFormatado = capitalize(category)

      if (!categoriaExiste) {
        const categoryDb: Category = await postCategory({
          name: nomeFormatado
        }).unwrap()
        dispatch(addToCategory(categoryDb))
      }

      const tran: TransactionReq = { category, date, type, value }
      const transDb: Transaction = await postTransaction(tran).unwrap()
      dispatch(addToHistorico(transDb))

      setDate('')
      setCategory('')
      setFormActive(undefined)
      setType('gasto')
      setValue(0)
    } catch (err) {
      console.error('Erro ao enviar formulário:', err)
    }
  }

  const handleEdit = (item: Transaction) => {
    setDate(item.date)
    setCategory(item.category)
    setType(item.type)
    setValue(item.value)
    setId(item.id)
    setFormActive('edit')
  }

  const handleEditSubmit = async (
    id: number | undefined,
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    try {
      const categoriaExiste = categorys.some(
        (c) => c.name.toLowerCase() === category.toLowerCase()
      )

      const nomeFormatado = capitalize(category)

      if (!categoriaExiste) {
        const categoryDb: Category = await postCategory({
          name: nomeFormatado
        }).unwrap()
        dispatch(addToCategory(categoryDb))
      }

      if (id) {
        const tran: TransactionReq = { category, date, type, value }
        const transDb: Transaction = await putTransaction({
          data: tran,
          id
        }).unwrap()
        dispatch(addToHistorico(transDb))

        setDate('')
        setCategory('')
        setFormActive(undefined)
        setType('gasto')
        setValue(0)
      }
    } catch (err) {
      console.error('Erro ao enviar formulário:', err)
    }
  }

  const handleDelete = async (id: number | undefined) => {
    try {
      if (id) {
        await deletTransaction(id).unwrap()
        dispatch(deleteTransaction(id))
        setDate('')
        setCategory('')
        setFormActive(undefined)
        setType('gasto')
        setValue(0)
      }
    } catch (err) {
      console.error('Erro ao enviar formulário:', err)
    }
  }

  useEffect(() => {
    const aplicarFiltros = () => {
      let filtradas = [...transactions]

      if (filtersActive) {
        if (filters.categoryAtivo && filters.categoria) {
          filtradas = filtradas.filter((t) => t.category === filters.categoria)
        }

        if (filters.dateAtivo && filters.inicio && filters.fim) {
          filtradas = filtradas.filter(
            (t) => t.date >= filters.inicio && t.date <= filters.fim
          )
        }
      }

      setFilteredTransactions(filtradas)
    }

    aplicarFiltros()
  }, [transactions, filtersActive, filters])

  useEffect(() => {
    if (data) {
      dispatch(setHistorico(data))
    }
  }, [data, dispatch])

  useEffect(() => {
    if (state?.formActive === 'add') {
      setFormActive('add')
    }
  }, [state])

  return (
    <main
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Header page="MainPage" />
      <DashboardSection
        onAdd={() => setFormActive('add')}
        onEdit={(item) => handleEdit(item)}
        onFilter={(active) => setFiltersActive(active)}
        itenList={filteredTransactions}
        name="Histórico"
        navFilter={
          <Filter
            onChange={(filtros) => setFilters(filtros)}
            categorys={categorys}
          />
        }
      />
      <FormModel
        onClose={() => setFormActive(undefined)}
        title="Adicionar Transação"
        isModal
        active={formActive == 'add'}
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
      >
        <>
          <div className="inputDiv">
            <label htmlFor="valor">Valor: </label>
            <InputMoeda onChange={(v) => setValue(v)} value={value} />
          </div>
          <div className="inputDiv">
            <label htmlFor="categorias">Categorias: </label>
            <SelectCategorias
              onChange={(v) => setCategory(v)}
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
            />
          </div>
          <div className="inputDiv">
            <label htmlFor="type">Type: </label>
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
          <Button color="green" type="submit">
            <>Salvar</>
          </Button>
        </>
      </FormModel>
      <FormModel
        onClose={() => setFormActive(undefined)}
        title="Editar transação"
        isModal
        active={formActive == 'edit'}
        onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
          handleEditSubmit(id, e)
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
              onChange={(v) => setCategory(v)}
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
            />
          </div>
          <div className="inputDiv">
            <label htmlFor="type">Type: </label>
            <select
              name="type"
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value as TransactionType)}
            >
              <option value="gasto">gasto</option>
              <option value="ganho">ganho</option>
            </select>
          </div>
          <div className="buttons">
            <Button color="green" type="submit">
              <>Salvar Edição</>
            </Button>
            <Button onClick={() => handleDelete(id)} color="red" type="button">
              <>Deletar</>
            </Button>
          </div>
        </>
      </FormModel>
      <Footer />
      <Loader type="historico" active={isLoading} />
    </main>
  )
}

export default Historico
