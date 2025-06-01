import { Container, TitleSecondary } from '../../styles'
import { ObjetivoContainer } from './styles'
import freepikBubble from '../../assets/img/freepik--speech-bubble--inject-2.svg'

const Objetivo = () => (
  <ObjetivoContainer>
    <Container>
      <div>
        <img src={freepikBubble} alt="bubble" />
        <TitleSecondary>
          Organize sua vida financeira com o EasyFinance
        </TitleSecondary>
      </div>
      <p>
        O EasyFinance é uma plataforma prática e intuitiva para quem quer ter
        controle total sobre suas finanças. Com ele, você registra despesas e
        receitas, define orçamentos mensais, acompanha metas de economia e
        analisa seus hábitos por meio de relatórios visuais. Tudo o que você
        precisa para planejar, economizar e conquistar seus objetivos
        financeiros — em um só lugar.
      </p>
    </Container>
  </ObjetivoContainer>
)

export default Objetivo
