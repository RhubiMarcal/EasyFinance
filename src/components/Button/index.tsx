import { ButtonContainer } from './styles'

type Props = {
  color: 'green' | 'darkBlue' | 'image' | 'gray' | 'red'
  onClick?: () => void
  children: JSX.Element
  type: 'button' | 'reset' | 'submit' | 'Link'
  image?: string
  href?: string
  size?: 'big' | 'small'
}

const Button = ({
  type,
  onClick,
  children,
  color,
  image,
  href,
  size
}: Props) => {
  const isLink = type === 'Link'

  return (
    <ButtonContainer
      as={isLink ? 'a' : 'button'}
      href={isLink ? href : undefined}
      onClick={onClick}
      color={color}
      image={image}
      type={!isLink ? type : undefined}
      size={size ? size : 'small'}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
