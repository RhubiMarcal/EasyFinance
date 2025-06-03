import { ButtonContainer } from './styles'

type Props = {
  color: 'green' | 'darkBlue' | 'image'
  onClick?: () => void
  children: JSX.Element
  type: 'button' | 'reset' | 'submit'
  image?: string
}

const Button = ({ type, onClick, children, color, image }: Props) => (
  <ButtonContainer image={image} color={color} type={type} onClick={onClick}>
    {children}
  </ButtonContainer>
)

export default Button
