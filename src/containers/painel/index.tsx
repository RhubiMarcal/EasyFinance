import { Container } from '../../styles'
import { PainelContainer } from './styles'
import painel1 from '../../assets/img/painel1.png'
import painel2 from '../../assets/img/painel2.png'
import painel3 from '../../assets/img/painel3.png'
import painel4 from '../../assets/img/painel4.png'
import BoxMainPage from '../../components/boxMainPage'
import Button from '../../components/Button'

const allButtons = [
  {
    title: 'Visualizar Histórico',
    img: painel1,
    button: {
      text: 'Histórico',
      link: '/historico'
    }
  },
  {
    title: 'Metas Finaceiras',
    img: painel2,
    button: {
      text: 'Metas',
      link: '/metas'
    }
  },
  {
    title: 'Limites de gastos',
    img: painel3,
    button: {
      text: 'Limites',
      link: '/limites'
    }
  },
  {
    title: 'Gráfico de gastos',
    img: painel4,
    button: {
      text: 'Gráfico',
      link: '/grafico'
    }
  }
]

const Painel = () => (
  <PainelContainer>
    <Container>
      <h2>Painel Principal</h2>
      <div>
        {allButtons.map((b, index) => (
          <BoxMainPage type="painel" key={index}>
            <>
              <h2>{b.title}</h2>
              <div className="row">
                <img src={b.img} alt={b.button.text} />
                <Button color="green" type="Link" href={b.button.link}>
                  <>{b.button.text}</>
                </Button>
              </div>
            </>
          </BoxMainPage>
        ))}
      </div>
    </Container>
  </PainelContainer>
)
export default Painel
