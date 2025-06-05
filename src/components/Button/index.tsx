import { ButtonContainer } from './styles'

type Props = {
  color: 'green' | 'darkBlue' | 'image'
  onClick?: () => void
  children: JSX.Element
  type: 'button' | 'reset' | 'submit' | 'Link'
  image?: string
  href?: string
}

const Button = ({ type, onClick, children, color, image, href }: Props) => {
  const isLink = type === 'Link'

  return (
    <ButtonContainer
      as={isLink ? 'a' : 'button'}
      href={isLink ? href : undefined}
      onClick={onClick}
      color={color}
      image={image}
      type={!isLink ? type : undefined}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
