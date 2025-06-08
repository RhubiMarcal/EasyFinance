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
  return (
    <Container>
      <ListItenDashboard page={name}>
        {itenList.map((item) => (
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
