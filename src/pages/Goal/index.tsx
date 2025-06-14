import { FormEvent, useState } from 'react'
import Footer from '../../containers/footer'
import Header from '../../containers/header'
import HeaderDashboard from '../../containers/headerDashboard'
import ListDashboard from '../../containers/listDashboard'
import * as api from '../../service/Hooks/GoalAPI'
import { MainDashboard } from '../../styles'
import Button from '../../components/Button'
import Error from '../../components/Error'
import FormModel from '../../components/Forms'
import InputMoeda from '../../components/InputMoeda'
import Loader from '../../components/Loader'

const Goals = () => {
  const {
    data: goals,
    isLoading: loadingGoals,
    refetch
  } = api.useGetGoalsQuery()
  const [postGoal, { isLoading: loadingPostGoal }] = api.usePostGoalMutation()
  const [putGoal, { isLoading: loadingPutGoal }] = api.usePutGoalMutation()
  const [deletGoal, { isLoading: loadingDeletGoal }] =
    api.useDeleteGoalMutation()

  const [formActive, setFormActive] = useState<'add' | 'edit'>()
  const [error, setError] = useState('')
  const [name, setName] = useState('')
  const [goalValue, setGoalValue] = useState(0)
  const [id, setId] = useState<number>()

  const isLoading =
    loadingGoals || loadingPostGoal || loadingPutGoal || loadingDeletGoal

  const handleEdit = (item: Goal) => {
    setGoalValue(item.GoalValue)
    setName(item.name)
    setId(item.id)
    setFormActive('edit')
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name || goalValue === 0) {
      setError('Todos os campos são obrigatórios')
      return
    }
    try {
      const goal: GoalReq = {
        CurrentValue: 0,
        GoalValue: goalValue,
        name
      }
      await postGoal(goal).unwrap()
      await refetch()
      handleClose()
    } catch (err) {
      let msg = 'Erro ao adicionar: '

      if (
        typeof err === 'object' &&
        err !== null &&
        'data' in err &&
        typeof (err as { data?: unknown }).data === 'object' &&
        (err as { data?: { detail?: string } }).data?.detail
      ) {
        msg += ' ' + (err as { data: { detail: string } }).data.detail
      }

      setError(msg)
    }
  }

  const handleEditSubmit = async (
    id: number | undefined,
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    if (!name || goalValue === 0) {
      setError('Todos os campos são obrigatórios')
      return
    }
    try {
      if (id) {
        await putGoal({
          id,
          data: { newGoal: goalValue, newName: name }
        }).unwrap()
        await refetch()
        handleClose()
      }
    } catch (err) {
      let msg = 'Erro ao adicionar: '

      if (
        typeof err === 'object' &&
        err !== null &&
        'data' in err &&
        typeof (err as { data?: unknown }).data === 'object' &&
        (err as { data?: { detail?: string } }).data?.detail
      ) {
        msg += ' ' + (err as { data: { detail: string } }).data.detail
      }

      setError(msg)
    }
  }

  const handleDelete = async (id: number | undefined) => {
    try {
      if (id) {
        await deletGoal(id).unwrap()
        await refetch()
        handleClose()
      } else {
        setError('Erro ao acessar o Id, Tente novamente')
      }
    } catch (err) {
      let msg = 'Erro ao adicionar: '

      if (
        typeof err === 'object' &&
        err !== null &&
        'data' in err &&
        typeof (err as { data?: unknown }).data === 'object' &&
        (err as { data?: { detail?: string } }).data?.detail
      ) {
        msg += ' ' + (err as { data: { detail: string } }).data.detail
      }

      setError(msg)
    }
  }

  const handleClose = () => {
    setFormActive(undefined)
    setError('')
    setGoalValue(0)
    setName('')
    setId(undefined)
  }

  return (
    <MainDashboard>
      <Header page="MainPage" />
      <section>
        <HeaderDashboard name="Metas" onAdd={() => setFormActive('add')} />
        <ListDashboard
          itenList={goals ? goals : []}
          name="Metas"
          onEdit={handleEdit}
        />
      </section>
      <FormModel
        onClose={() => handleClose()}
        title={formActive === 'add' ? 'Adicionar Meta' : 'Editar Meta'}
        isModal
        active={formActive === 'add' || formActive === 'edit'}
        onSubmit={(e) =>
          formActive === 'add' ? handleSubmit(e) : handleEditSubmit(id, e)
        }
      >
        <>
          <div className="inputDiv">
            <label htmlFor="name">Meta: </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="inputDiv">
            <label htmlFor="valor">Valor: </label>
            <InputMoeda onChange={setGoalValue} value={goalValue} />
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
      <Loader active={isLoading} type="meta" />
    </MainDashboard>
  )
}

export default Goals
