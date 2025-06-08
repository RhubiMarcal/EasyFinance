import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import { Container, TitleSecondary } from '../../styles'
import { HeaderDashboardContainer } from './styles'
import { useEffect, useState } from 'react'
import backIcon from '../../assets/img/voltar.png'
import adicionar from '../../assets/img/adicionar.png'
import filtrar from '../../assets/img/filtrar.png'

type Props = {
  name: 'Histórico' | 'Limites' | 'Metas'
  onAdd?: () => void
  onFilter: (activeFilter: boolean) => void
  navFilter: JSX.Element
}

const HeaderDashboard = ({ name, navFilter, onFilter, onAdd }: Props) => {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState(false)

  useEffect(() => {
    onFilter(activeFilter)
  }, [activeFilter, onFilter])
  return (
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
  )
}

export default HeaderDashboard
