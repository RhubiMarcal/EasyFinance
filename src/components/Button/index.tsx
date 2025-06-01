import { ButtonContainer } from './styles'

type Props = {
  type: 'green' | 'black'
  onClick?: () => void
  children: JSX.Element
}

const Button = ({ type, onClick, children }: Props) => (
  <ButtonContainer type={type} onClick={onClick}>
    {children}
  </ButtonContainer>
)

export default Button
