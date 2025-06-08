import * as S from './styles'
import imgGanho from '../../assets/img/icone de ganho.png'
import imgGasto from '../../assets/img/icone de gasto.png'
import editIcon from '../../assets/img/editar.png'
import imgLimit from '../../assets/img/LimitEdit.png'
import { useGetHistoricoQuery } from '../../service/Hooks/userAPI'
import ProgressBar from '../ProgressBar'
import Button from '../Button'
import Loader from '../Loader'

type Props = {
  name: 'Histórico' | 'Limites' | 'Metas'
  item: Transaction | Goal | Limit
  onEdit: (item: Transaction | Goal | Limit) => void
}

export const ItensFunctions = ({ item, name, onEdit }: Props) => {
  const parseToBrl = (price = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const { data: historicoData, isLoading: loadingHistorico } =
    useGetHistoricoQuery()

  const getTotalGastoMes = (categoria: string): number => {
    const agora = new Date()
    const mesAtual = agora.getMonth()
    const anoAtual = agora.getFullYear()

    const gastosMes =
      historicoData?.filter((t) => {
        const data = new Date(t.date)
        return (
          t.category === categoria &&
          data.getMonth() === mesAtual &&
          data.getFullYear() === anoAtual
        )
      }) || []

    return gastosMes.reduce((acc, t) => acc + t.value, 0)
  }

  const calcPercent = (item: LimitReq): number => {
    const totalCategoriaMes = getTotalGastoMes(item.category)
    const percent = (totalCategoriaMes / item.value) * 100
    return Math.round(percent)
  }

  function isTransaction(
    item: Transaction | Goal | Limit
  ): item is Transaction {
    return (item as Transaction).category !== undefined
  }

  function isLimit(item: Transaction | Goal | Limit): item is Limit {
    return (item as Limit).category !== undefined
  }

  if (name == 'Histórico' && isTransaction(item))
    return (
      <S.ContainerItenHistorico>
        <img src={item.type == 'ganho' ? imgGanho : imgGasto} alt={item.type} />
        <div>
          <p>{parseToBrl(item.value)}</p>
          {item.isMeta ? (
            <b>Categoria: Meta</b>
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
              {parseToBrl(getTotalGastoMes(item.category)) +
                ' / ' +
                parseToBrl(item.value)}
            </p>
          </div>
        </div>
        <ProgressBar color="green" progress={calcPercent(item)} />
        <Button color="green" type="button">
          <>Visualizar</>
        </Button>
        <S.ButtonEdit type="button" onClick={() => onEdit(item)}>
          <img src={editIcon} alt="Edit" />
        </S.ButtonEdit>
        <Loader active={loadingHistorico} type="limit" />
      </S.ContainerItenLimite>
    )
  return <S.ContainerItenMetas></S.ContainerItenMetas>
}
