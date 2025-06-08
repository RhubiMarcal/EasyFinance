import { Container, TitleSecondary } from '../../styles'
import backIcon from '../../assets/img/voltar.png'
import adicionar from '../../assets/img/adicionar.png'
import filtrar from '../../assets/img/filtrar.png'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { HeaderDashboardContainer, ListItenDashboard } from './styles'
import { ItensFunctions } from '../../components/itensFunctions'
import { useEffect, useState } from 'react'
type Props<T extends Transaction | Goal | Limit> = {
  name: 'Histórico' | 'Limites' | 'Metas'
  itenList: T[]
  onAdd?: () => void
  onEdit: (item: T) => void
  onFilter: (activeFilter: boolean) => void
  navFilter: JSX.Element
}

const DashboardSection = <T extends Transaction | Goal | Limit>({
  itenList,
  name,
  onAdd,
  onEdit,
  onFilter,
  navFilter
}: Props<T>) => {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState(false)

  useEffect(() => {
    onFilter(activeFilter)
  }, [activeFilter, onFilter])

  return (
    <section style={{ flex: 1 }}>
      <HeaderDashboardContainer activeFilter={activeFilter}>
        <Container>
          <div className="back">
            <button type="button" onClick={() => navigate('/MainPage')}>
              <img src={backIcon} alt="voltar" />
            </button>
            <TitleSecondary>{name}</TitleSecondary>
          </div>
          <hr />
          <div className="botoes">
            <Button onClick={onAdd} size="big" type="button" color="green">
              <>
                <img src={adicionar} alt="" />
                Adicionar
              </>
            </Button>
            <Button
              onClick={() => setActiveFilter(!activeFilter)}
              size="big"
              type="button"
              color="gray"
            >
              <>
                <img src={filtrar} alt="filtrar" />
                Filtrar
              </>
            </Button>
          </div>
          <nav>{navFilter}</nav>
        </Container>
      </HeaderDashboardContainer>
      <Container>
        <ListItenDashboard>
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
    </section>
  )
}

export default DashboardSection
