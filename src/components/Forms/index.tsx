import { FormEvent } from 'react'
import { TitleSecondary } from '../../styles'
import Button from '../Button'
import { FormsContainer } from './styles'

type Props = {
  children: JSX.Element
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
  title: string
}

const FormModel = ({ children, onSubmit, title }: Props) => (
  <FormsContainer action="" onSubmit={onSubmit}>
    <TitleSecondary>{title}</TitleSecondary>
    {children}
    <Button color="green" type="submit">
      <>Entrar</>
    </Button>
  </FormsContainer>
)

export default FormModel
