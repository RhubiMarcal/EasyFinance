import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import { Container, TitleSecondary } from '../../styles'
import { HeaderDashboardContainer } from './styles'
import { useEffect, useState } from 'react'
import backIcon from '../../assets/img/voltar.png'
import adicionar from '../../assets/img/adicionar.png'
import filtrar from '../../assets/img/filtrar.png'
import ProgressBar from '../../components/ProgressBar'

type Props = {
  name: 'Histórico' | 'Limites' | 'Metas'
  onAdd?: () => void
  onFilter?: (activeFilter: boolean) => void
  navFilter?: JSX.Element
  details?: {
    progress: number
    nameLimit: string
  }
}

const HeaderDashboard = ({
  name,
  navFilter,
  onFilter,
  onAdd,
  details
}: Props) => {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState(false)

  useEffect(() => {
    if (onFilter) {
      onFilter(activeFilter)
    }
  }, [activeFilter, onFilter])
  return (
    <HeaderDashboardContainer activeFilter={activeFilter}>
      <Container>
        <div className="back">
          <button type="button" onClick={() => navigate('/MainPage')}>
            <img src={backIcon} alt="voltar" />
          </button>
          <TitleSecondary>
            {`${name}${details ? `: ${details.nameLimit}` : ''}`}
          </TitleSecondary>
        </div>
        <hr />
        {!details ? (
          <>
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
          </>
        ) : (
          <ProgressBar color="darkBlue" progress={details.progress} />
        )}
      </Container>
    </HeaderDashboardContainer>
  )
}

export default HeaderDashboard
