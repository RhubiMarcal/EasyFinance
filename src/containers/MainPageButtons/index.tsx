import Button from '../../components/Button'
import { Container } from '../../styles'
import { MainButtonsConainer } from './Styles'
import imgHistorico from '../../assets/img/visualizarHistorico.png'
import imgMetas from '../../assets/img/metasFinaceiras.png'
import imgLimites from '../../assets/img/Limitesgasto.png'
import imgGraficos from '../../assets/img/graficos.png'

const MainPageButtons = () => (
  <MainButtonsConainer>
    <Container>
      <Button color="darkBlue" type="button">
        <>Adicionar transação</>
      </Button>
      <Button color="darkBlue" type="button">
        <>Criar Limite</>
      </Button>
      <Button color="darkBlue" type="button">
        <>Criar meta</>
      </Button>
    </Container>
    <hr />
    <Container>
      <Button image={imgHistorico} color="image" type="button">
        <>Visualizar Histórico</>
      </Button>
      <Button image={imgLimites} color="image" type="button">
        <>Limites de gasto</>
      </Button>
      <Button image={imgMetas} color="image" type="button">
        <>Metas finaceiras</>
      </Button>
      <Button image={imgGraficos} color="image" type="button">
        <>Grafico de gastos</>
      </Button>
    </Container>
  </MainButtonsConainer>
)

export default MainPageButtons
