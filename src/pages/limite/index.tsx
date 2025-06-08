import { FormEvent, useEffect, useState } from 'react'
import Header from '../../containers/header'
import {
  useDeleteLimitMutation,
  useGetLimitsQuery,
  usePostLimitMutation,
  usePutLimitMutation
} from '../../service/Hooks/limitAPI'
import { MainDashboard } from '../../styles'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToLimits,
  deleteLimit,
  setLimits
} from '../../store/slices/limitSlice'
import { RootReducer } from '../../store'
import Loader from '../../components/Loader'
import { useLocation, useNavigate } from 'react-router-dom'
import Filter, { Filters } from '../../components/Filter'
import Footer from '../../containers/footer'
import Button from '../../components/Button'
import FormModel from '../../components/Forms'
import Error from '../../components/Error'
import InputMoeda from '../../components/InputMoeda'
import { useGetCategorysQuery } from '../../service/Hooks/categoryAPI'
import { setCategorys } from '../../store/slices/categorySlice'
import HeaderDashboard from '../../containers/headerDashboard'
import ListDashboard from '../../containers/listDashboard'

const Limites = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { data: limitsData, isLoading: loadingLimits } = useGetLimitsQuery()
  const { data: categoryData, isLoading: loadingCategory } =
    useGetCategorysQuery()
  const { limits, categorys } = useSelector((state: RootReducer) => ({
    limits: state.limits.limits,
    categorys: state.categories.categorys
  }))
  const location = useLocation()

  const [formActive, setFormActive] = useState<'add' | 'edit'>()
  const [error, setError] = useState('')
  const [categoryName, setCategoryName] = useState('')
  const [limitValue, setLimitValue] = useState(0)
  const [filterActive, setFilterActive] = useState(false)
  const [filters, setFilters] = useState<Filters>({
    categoria: '',
    categoryAtivo: false,
    dateAtivo: false,
    inicio: '',
    fim: ''
  })
  const [filtredLimit, setFiltredLimit] = useState(limits)
  const [postLimit] = usePostLimitMutation()
  const [putLimit] = usePutLimitMutation()
  const [deletLimit] = useDeleteLimitMutation()
  const [id, setId] = useState<number>()

  useEffect(() => {
    if (limitsData) {
      dispatch(setLimits(limitsData))
    }
  }, [limitsData, dispatch])

  useEffect(() => {
    const formActiveFromLocation = location.state?.formActive
    if (formActiveFromLocation === 'add' && formActive !== 'add') {
      setFormActive('add')
      window.history.replaceState({}, document.title)
    }
  }, [location.state, formActive])

  useEffect(() => {
    if (categoryData) {
      dispatch(setCategorys(categoryData))
    }
  }, [categoryData, dispatch])

  useEffect(() => {
    const aplicarFiltros = () => {
      let filtradas = [...limits]

      if (filterActive) {
        const { categoryAtivo, categoria } = filters

        if (
          categoryAtivo &&
          typeof categoria === 'string' &&
          categoria.trim() !== ''
        ) {
          filtradas = filtradas.filter((t) => t.category === categoria)
        }
      }

      setFiltredLimit(filtradas)
    }

    aplicarFiltros()
  }, [limits, filterActive, filters])

  const handleEdit = (item: Limit) => {
    setCategoryName(item.category)
    setLimitValue(item.value)
    setId(item.id)
    setFormActive('edit')
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!categoryName || limitValue === 0) {
      setError('Todos os campos são obrigatórios')
      return
    }
    try {
      const limit: LimitReq = { category: categoryName, value: limitValue }
      const limitDb: Limit = await postLimit(limit).unwrap()
      dispatch(addToLimits(limitDb))
      handleClose()
    } catch (err) {
      setError('Erro ao adicionar: ' + err)
    }
  }

  const handleEditSubmit = async (
    id: number | undefined,
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    if (!categoryName || limitValue === 0) {
      setError('Todos os campos são obrigatórios')
      return
    }
    try {
      if (id) {
        const limit: LimitReq = { category: categoryName, value: limitValue }
        const limitDb: Limit = await putLimit({ data: limit, id }).unwrap()
        dispatch(addToLimits(limitDb))
        handleClose()
      }
    } catch (err) {
      setError('Erro ao enviar formulário: ' + err)
    }
  }

  const handleDelete = async (id: number | undefined) => {
    try {
      if (id) {
        await deletLimit(id).unwrap()
        dispatch(deleteLimit(id))
        handleClose()
      } else {
        setError('Erro ao acessar o Id, Tente novamente')
      }
    } catch (err) {
      setError('Erro ao deletar: ' + err)
    }
  }

  const handleClose = () => {
    setFormActive(undefined)
    setError('')
    setCategoryName('')
    setLimitValue(0)
    setId(undefined)

    navigate('/Limites', { replace: true, state: {} })
  }

  return (
    <MainDashboard>
      <Header page="MainPage" />
      <section>
        <HeaderDashboard
          name="Limites"
          onFilter={setFilterActive}
          onAdd={() => setFormActive('add')}
          navFilter={
            <Filter
              hasCategory
              onChange={(filters) => setFilters(filters)}
              categorys={categorys}
            />
          }
        />
        <ListDashboard
          itenList={filtredLimit}
          name="Limites"
          onEdit={handleEdit}
        />
      </section>
      <FormModel
        onClose={() => handleClose()}
        title={
          formActive === 'add' ? 'Adicionar Transação' : 'Editar Transação'
        }
        isModal
        active={formActive === 'add' || formActive === 'edit'}
        onSubmit={(e) =>
          formActive === 'add' ? handleSubmit(e) : handleEditSubmit(id, e)
        }
      >
        <>
          <div className="inputDiv">
            <label htmlFor="category">Categoria: </label>
            <select
              name="category"
              id="category"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            >
              <option value=""></option>
              {categorys.map((cat) => (
                <option value={cat.name} key={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <div className="inputDiv">
            <label htmlFor="valor">Valor: </label>
            <InputMoeda onChange={setLimitValue} value={limitValue} />
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
          <Error msg={error} />
        </>
      </FormModel>
      <Footer />
      <Loader active={loadingLimits || loadingCategory} type="limit" />
    </MainDashboard>
  )
}

export default Limites
