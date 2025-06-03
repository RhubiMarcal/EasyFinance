import Button from '../../components/Button'
import { Container, TitlePrimary } from '../../styles'
import { FooterContainer } from './styles'

type props = {
  startNow?: boolean
}

const Footer = ({ startNow }: props) => (
  <FooterContainer startNow={startNow}>
    <Container>
      <h3>Comece agora!</h3>
      <Button type="button" color="green">
        <>ENTRAR</>
      </Button>
    </Container>
    <div>
      <TitlePrimary>EasyFinance</TitlePrimary>
      <p>
        Todos os direitos a <span>&copy;RhubiMarcal</span> |{' '}
        <span>&copy;KaikalDev</span>
      </p>
    </div>
  </FooterContainer>
)

export default Footer
