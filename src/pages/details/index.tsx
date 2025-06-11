import { useParams } from 'react-router-dom'
import Footer from '../../containers/footer'
import Header from '../../containers/header'
import HeaderDashboard from '../../containers/headerDashboard'
import { useGetLimitByIdQuery } from '../../service/Hooks/limitAPI'
import { MainDashboard } from '../../styles'
import {
  useGetCategoryHistoricoQuery,
  useGetCategorysQuery
} from '../../service/Hooks/categoryAPI'
import {
  calcPercent,
  getCategoryIdByName,
  getTotalGastoMes
} from '../../utils/utils'
import ListDashboard from '../../containers/listDashboard'
import Loader from '../../components/Loader'
import { useGetGoalByIdQuery } from '../../service/Hooks/GoalAPI'

type Props = {
  type: 'Limites' | 'Metas'
}

const Details = ({ type }: Props) => {
  const { id } = useParams()
  const idNumber = id ? parseInt(id, 10) : NaN

  const { data: limit, isLoading: loadingGetLimitIb } = useGetLimitByIdQuery(
    idNumber,
    { skip: isNaN(idNumber) }
  )

  const { data: allCategorys, isLoading: loadingCategorys } =
    useGetCategorysQuery()

  const categoryId =
    limit && allCategorys
      ? getCategoryIdByName(allCategorys, limit.category)
      : undefined

  const { data: historicoCategory = [], isLoading: loadingHistorico } =
    useGetCategoryHistoricoQuery(categoryId ?? -1, {
      skip: typeof categoryId !== 'number'
    })

  const { data: Goal, isLoading: loadingGoals } = useGetGoalByIdQuery(
    idNumber,
    { skip: isNaN(idNumber) }
  )

  const historico: Transaction[] = (Goal?.historico ?? []).map((t) => ({
    ...t,
    type: t.type === 'gasto' ? 'ganho' : 'gasto'
  }))

  const progress =
    type === 'Limites'
      ? calcPercent(
          Number(limit?.value) || 0,
          getTotalGastoMes(historicoCategory)
        )
      : calcPercent(
          Number(Goal?.GoalValue) || 0,
          Number(Goal?.CurrentValue) || 0
        )

  return (
    <MainDashboard>
      <Header page="MainPage" />
      <section>
        <HeaderDashboard
          name={type}
          details={{
            progress,
            nameLimit:
              type === 'Limites'
                ? limit?.category ?? ' '
                : Goal?.name ?? 'Meta sem nome'
          }}
        />
        <ListDashboard
          itenList={type === 'Limites' ? historicoCategory : historico ?? []}
          name="Histórico"
        />
      </section>
      <Footer />
      <Loader
        active={
          loadingCategorys ||
          loadingHistorico ||
          loadingGetLimitIb ||
          loadingGoals
        }
        type={type === 'Limites' ? 'limit' : 'meta'}
      />
    </MainDashboard>
  )
}

export default Details
