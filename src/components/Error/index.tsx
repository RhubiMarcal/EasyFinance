import { ErrorContainer } from './styles'

type Props = {
  msg: string | undefined
}

const Error = ({ msg }: Props) => {
  if (msg != '') {
    return <ErrorContainer>{msg}</ErrorContainer>
  } else {
    return <></>
  }
}

export default Error
