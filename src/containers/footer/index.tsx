import Button from '../../components/Button'
import { Container, TitlePrimary } from '../../styles'
import { FooterContainer } from './styles'

const Footer = () => (
  <FooterContainer>
    <Container>
      <h3>Comece agora!</h3>
      <Button type="button" color="green">
        <>ENTRAR</>
      </Button>
    </Container>
    <div>
      <TitlePrimary>EasyFinance</TitlePrimary>
      <p>
        Todos os direitos a <span>&copy;RhubiMarcal</span>
      </p>
    </div>
  </FooterContainer>
)

export default Footer
