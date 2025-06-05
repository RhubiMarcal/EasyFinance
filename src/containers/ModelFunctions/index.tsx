import { Container, TitleSecondary } from '../../styles'
import Footer from '../footer'
import Header from '../header'
import { FuncionModelContainer } from './styles'
import backIcon from '../../assets/img/voltar.png'
import adicionar from '../../assets/img/adicionar.png'
import filtrar from '../../assets/img/filtrar.png'
type Props = {
  name: string
  itemList: [
    {
      value: number
      date: string
      category: string
      type: 'ganho' | 'gasto'
    }
  ]
}

const FunctionModel = ({ itemList, name }: Props) => (
  <>
    <Header page="MainPage" />
    <FuncionModelContainer>
      <Container>
        <div>
          <img src={backIcon} alt="voltar" />
          <TitleSecondary>{name}</TitleSecondary>
        </div>
        <hr />
        <div className="botoes">
          <div className="adicionar">
            <img src={adicionar} alt="adicionar" />
            <span>Adicionar</span>
          </div>
          <div className="filtrar">
            <img src={filtrar} alt="filtrar" />
            <span>Filtrar</span>
          </div>
        </div>
      </Container>
    </FuncionModelContainer>
    <Footer />
  </>
)

export default FunctionModel
