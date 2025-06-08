import * as S from './styles'
import imgGanho from '../../assets/img/icone de ganho.png'
import imgGasto from '../../assets/img/icone de gasto.png'
import editIcon from '../../assets/img/editar.png'

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

  function isTransaction(
    item: Transaction | Goal | Limit
  ): item is Transaction {
    return (item as Transaction).category !== undefined
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
        <button type="button" onClick={() => onEdit(item)}>
          <img src={editIcon} alt="Edit" />
        </button>
      </S.ContainerItenHistorico>
    )
  if (name == 'Limites') return <S.ContainerItenLimite></S.ContainerItenLimite>
  return <S.ContainerItenMetas></S.ContainerItenMetas>
}
