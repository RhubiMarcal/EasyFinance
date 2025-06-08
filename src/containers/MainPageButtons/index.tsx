import Button from '../../components/Button'
import { Container } from '../../styles'
import { MainButtonsConainer } from './Styles'
import imgHistorico from '../../assets/img/visualizarHistorico.png'
import imgMetas from '../../assets/img/metasFinaceiras.png'
import imgLimites from '../../assets/img/Limitesgasto.png'
import imgGraficos from '../../assets/img/graficos.png'
import { useNavigate } from 'react-router-dom'

const MainPageButtons = () => {
  const navigate = useNavigate()
  return (
    <MainButtonsConainer>
      <Container>
        <Button
          onClick={() =>
            navigate('/Historico', { state: { formActive: 'add' } })
          }
          color="darkBlue"
          type="button"
        >
          <>Adicionar transação</>
        </Button>
        <Button
          color="darkBlue"
          type="button"
          onClick={() => navigate('/Limites', { state: { formActive: 'add' } })}
        >
          <>Criar Limite</>
        </Button>
        <Button color="darkBlue" type="button">
          <>Criar meta</>
        </Button>
      </Container>
      <hr />
      <Container>
        <Button
          image={imgHistorico}
          color="image"
          type="Link"
          href="/Historico"
        >
          <>Visualizar Histórico</>
        </Button>
        <Button image={imgLimites} color="image" type="Link" href="/Limites">
          <>Limites de gasto</>
        </Button>
        <Button image={imgMetas} color="image" type="Link">
          <>Metas finaceiras</>
        </Button>
        <Button image={imgGraficos} color="image" type="Link">
          <>Grafico de gastos</>
        </Button>
      </Container>
    </MainButtonsConainer>
  )
}

export default MainPageButtons
