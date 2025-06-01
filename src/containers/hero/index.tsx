import Button from '../../components/Button'
import { Container, TitlePrimary } from '../../styles'
import { HeroContainer } from './styles'

const Hero = () => (
  <HeroContainer>
    <Container>
      <TitlePrimary>EasyFinance</TitlePrimary>
      <p>
        Plataforma ideal para gerenciar suas finanças de forma simples e
        eficiente. Organize seu orçamento, acompanhe seus gastos e tome decisões
        financeiras mais assertivas com facilidade e segurança.
      </p>
      <Button type="green">
        <>Entrar</>
      </Button>
    </Container>
  </HeroContainer>
)

export default Hero
