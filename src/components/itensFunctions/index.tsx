import * as S from './styles'
import imgGanho from '../../assets/img/icone de ganho.png'
import imgGasto from '../../assets/img/icone de gasto.png'
import editIcon from '../../assets/img/editar.png'
import imgLimit from '../../assets/img/LimitEdit.png'
import imgGoal from '../../assets/img/iconeMeta.png'
import ProgressBar from '../ProgressBar'
import Button from '../Button'
import Loader from '../Loader'
import {
  calcPercent,
  getCategoryIdByName,
  getTotalGastoMes,
  parseToBrl
} from '../../utils/utils'
import {
  useGetCategoryHistoricoQuery,
  useGetCategorysQuery
} from '../../service/Hooks/categoryAPI'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  name: 'Histórico' | 'Limites' | 'Metas'
  item: Transaction | Goal | Limit
  onEdit?: (item: Transaction | Goal | Limit) => void
}

export const ItensFunctions = ({ item, name, onEdit }: Props) => {
  const [categoryId, setCategoryId] = useState<number | null>(null)
  const navigate = useNavigate()

  const { data: allCategorys, isLoading: loadingCategorys } =
    useGetCategorysQuery()

  const { data: historicoCategory = [], isLoading: loadingHistorico } =
    useGetCategoryHistoricoQuery(categoryId ?? 0, {
      skip: categoryId === null
    })

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

  useEffect(() => {
    if (name === 'Limites' && isLimit(item)) {
      const id = getCategoryIdByName(allCategorys ?? [], item.category)
      if (id !== undefined && id !== null) {
        setCategoryId(id)
      }
    }
  }, [name, item, allCategorys])

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
        {onEdit && (
          <S.ButtonEdit type="button" onClick={() => onEdit(item)}>
            <img src={editIcon} alt="Edit" />
          </S.ButtonEdit>
        )}
      </S.ContainerItenHistorico>
    )
  if (name == 'Limites' && isLimit(item)) {
    return (
      <S.ContainerItenLimite>
        <div>
          <img src={imgLimit} alt="" />
          <div>
            <p>{item.category}</p>
            <p>
              {parseToBrl(getTotalGastoMes(historicoCategory ?? [])) +
                ' / ' +
                parseToBrl(item.value)}
            </p>
          </div>
        </div>
        <ProgressBar
          color="green"
          progress={calcPercent(
            item.value,
            getTotalGastoMes(historicoCategory ?? [])
          )}
        />
        <Button
          onClick={() => navigate(`/limites/details/${item.id}`)}
          color="green"
          type="button"
        >
          <>Visualizar</>
        </Button>
        {onEdit && (
          <S.ButtonEdit type="button" onClick={() => onEdit(item)}>
            <img src={editIcon} alt="Edit" />
          </S.ButtonEdit>
        )}
        <Loader active={loadingHistorico || loadingCategorys} type="limit" />
      </S.ContainerItenLimite>
    )
  }
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
        <Button
          onClick={() => navigate(`/metas/details/${item.id}`)}
          color="green"
          type="button"
        >
          <>Visualizar</>
        </Button>
        {onEdit && (
          <S.ButtonEdit type="button" onClick={() => onEdit(item)}>
            <img src={editIcon} alt="Edit" />
          </S.ButtonEdit>
        )}
        <Loader active={loadingHistorico || loadingCategorys} type="limit" />
      </S.ContainerItenMetas>
    )

  return <></>
}
