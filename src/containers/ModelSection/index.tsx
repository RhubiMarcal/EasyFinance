import { Container, TitleSecondary } from '../../styles'
import { ModelSectionsContainer } from './styles'

export type props = {
  titulo: string
  text: string
  img: string
}

const ModelSection = ({ img, text, titulo }: props) => (
  <ModelSectionsContainer>
    <Container>
      <div>
        <TitleSecondary>{titulo}</TitleSecondary>
        <p>{text}</p>
      </div>
      <img src={img} alt={titulo} />
    </Container>
  </ModelSectionsContainer>
)
export default ModelSection
