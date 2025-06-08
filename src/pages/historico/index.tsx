import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

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
import { usePostCategoryMutation } from '../../service/Hooks/categoryAPI'
import {
  useDeleteTransactionMutation,
  usePostTransactionMutation,
  usePutTransactionMutation
} from '../../service/Hooks/transactionAPI'

import { MainDashboard } from '../../styles'
import { addToCategory } from '../../store/slices/categorySlice'
import {
  addToHistorico,
  deleteTransaction,
  setHistorico
} from '../../store/slices/transactionSlice'

type TransactionType = 'gasto' | 'ganho'

const Historico = () => {
  const { data: historicoData, isLoading: loadingHistorico } =
    useGetHistoricoQuery()
  const [postCategory, { isLoading: loadingCategoria }] =
    usePostCategoryMutation()
  const [postTransaction, { isLoading: loadingTransaction }] =
    usePostTransactionMutation()
  const [putTransaction, { isLoading: loadingEditTransaction }] =
    usePutTransactionMutation()
  const [deletTransaction, { isLoading: loadingDeletTransaction }] =
    useDeleteTransactionMutation()

  const dispatch = useDispatch()
  const { transactions, categorys } = useSelector((state: RootReducer) => ({
    transactions: state.transactions.transactions,
    categorys: state.categories.categorys
  }))
  const location = useLocation()

  const [formActive, setFormActive] = useState<'add' | 'edit'>()
  const [type, setType] = useState<TransactionType>('gasto')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')
  const [id, setId] = useState<number>()
  const [erro, setErro] = useState('')

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
    if (category == '' || value == 0 || date == '') {
      setErro('Todos os campos são obrigatórios')
      return
    }
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

      handleClose()
    } catch (err) {
      setErro('Erro ao adicionar: ' + err)
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
    if (category == '' || value == 0 || date == '') {
      setErro('Todos os campos são obrigatórios')
      return
    }
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

        handleClose()
      }
    } catch (err) {
      setErro('Erro ao enviar formulário: ' + err)
    }
  }

  const handleDelete = async (id: number | undefined) => {
    try {
      if (id) {
        await deletTransaction(id).unwrap()
        dispatch(deleteTransaction(id))
        handleClose()
      } else {
        setErro('Erro ao acessar o Id, Tente novamente')
      }
    } catch (err) {
      setErro('Erro ao deletar: ' + err)
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
      let filtradas = [...transactions]

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
    if (historicoData) {
      dispatch(setHistorico(historicoData))
    }
  }, [historicoData, dispatch])

  useEffect(() => {
    const formActiveFromLocation = location.state?.formActive
    if (formActiveFromLocation === 'add' && formActive !== 'add') {
      setFormActive('add')
      window.history.replaceState({}, document.title)
    }
  }, [location.state, formActive])

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
              categorys={categorys}
            />
          }
        />
        <ListDashboard
          itenList={filteredTransactions}
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
