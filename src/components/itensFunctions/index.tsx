import * as S from './styles'
import imgGanho from '../../assets/img/icone de ganho.png'
import imgGasto from '../../assets/img/icone de gasto.png'
import editIcon from '../../assets/img/editar.png'
import imgLimit from '../../assets/img/LimitEdit.png'
import imgGoal from '../../assets/img/iconeMeta.png'
import { useGetHistoricoQuery } from '../../service/Hooks/userAPI'
import ProgressBar from '../ProgressBar'
import Button from '../Button'
import Loader from '../Loader'
import { calcPercent, getTotalGastoMes, parseToBrl } from '../../utils/utils'

type Props = {
  name: 'Histórico' | 'Limites' | 'Metas'
  item: Transaction | Goal | Limit
  onEdit: (item: Transaction | Goal | Limit) => void
}

export const ItensFunctions = ({ item, name, onEdit }: Props) => {
  const { data: historicoData, isLoading: loadingHistorico } =
    useGetHistoricoQuery()

  function isTransaction(
    item: Transaction | Goal | Limit
  ): item is Transaction {
    return (item as Transaction).category !== undefined
  }

  function isLimit(item: Transaction | Goal | Limit): item is Limit {
    return (item as Limit).category !== undefined
  }

  function isGoal(item: Transaction | Goal | Limit): item is Goal {
    return (item as Goal).GoalValue !== undefined
  }

  if (name == 'Histórico' && isTransaction(item))
    return (
      <S.ContainerItenHistorico>
        <img src={item.type == 'ganho' ? imgGanho : imgGasto} alt={item.type} />
        <div>
          <p>{parseToBrl(item.value)}</p>
          {item.goal_id ? (
            <b>{item.category}</b>
          ) : (
            <b>Categoria: {item.category}</b>
          )}
          <span>{item.date.split('-').reverse().join('/')}</span>
        </div>
        <S.ButtonEdit type="button" onClick={() => onEdit(item)}>
          <img src={editIcon} alt="Edit" />
        </S.ButtonEdit>
      </S.ContainerItenHistorico>
    )
  if (name == 'Limites' && isLimit(item))
    return (
      <S.ContainerItenLimite>
        <div>
          <img src={imgLimit} alt="" />
          <div>
            <p>{item.category}</p>
            <p>
              {parseToBrl(
                getTotalGastoMes(
                  historicoData ? historicoData : [],
                  item.category
                )
              ) +
                ' / ' +
                parseToBrl(item.value)}
            </p>
          </div>
        </div>
        <ProgressBar
          color="green"
          progress={calcPercent(
            item.value,
            getTotalGastoMes(historicoData ? historicoData : [], item.category)
          )}
        />
        <Button color="green" type="button">
          <>Visualizar</>
        </Button>
        <S.ButtonEdit type="button" onClick={() => onEdit(item)}>
          <img src={editIcon} alt="Edit" />
        </S.ButtonEdit>
        <Loader active={loadingHistorico} type="limit" />
      </S.ContainerItenLimite>
    )
  if (name == 'Metas' && isGoal(item))
    return (
      <S.ContainerItenMetas>
        <div>
          <img src={imgGoal} alt="" />
          <div>
            <p>{item.name}</p>
            <p>
              {parseToBrl(item.CurrentValue) +
                ' / ' +
                parseToBrl(item.GoalValue)}
            </p>
          </div>
        </div>
        <ProgressBar
          color="green"
          progress={calcPercent(item.GoalValue, item.CurrentValue)}
        />
      </S.ContainerItenMetas>
    )

  return <></>
}
