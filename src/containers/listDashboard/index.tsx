import { ListItenDashboard } from './styles'
import { ItensFunctions } from '../../components/itensFunctions'
import { Container } from '../../styles'

type Props<T extends Transaction | Goal | Limit> = {
  name: 'Histórico' | 'Limites' | 'Metas'
  itenList: T[]
  onEdit: (item: T) => void
}

const ListDashboard = <T extends Transaction | Goal | Limit>({
  itenList,
  name,
  onEdit
}: Props<T>) => {
  const sortedList = [...itenList].sort((a, b) => {
    if (name === 'Histórico') {
      const tA = a as Transaction
      const tB = b as Transaction
      return new Date(tB.date).getTime() - new Date(tA.date).getTime()
    } else {
      return a.id - b.id
    }
  })

  return (
    <Container>
      <ListItenDashboard page={name}>
        {sortedList.map((item) => (
          <ItensFunctions
            onEdit={() => onEdit(item)}
            item={item}
            name={name}
            key={item.id}
          />
        ))}
      </ListItenDashboard>
    </Container>
  )
}

export default ListDashboard
