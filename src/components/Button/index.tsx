import { ButtonContainer } from './styles'

type Props = {
  color: 'green' | 'black'
  onClick?: () => void
  children: JSX.Element
  type: 'button' | 'reset' | 'submit'
}

const Button = ({ type, onClick, children, color }: Props) => (
  <ButtonContainer color={color} type={type} onClick={onClick}>
    {children}
  </ButtonContainer>
)

export default Button
