import { BoxMainPageContainer } from './styles'

type Props = {
  children: JSX.Element
  type: 'hero' | 'painel'
}
const BoxMainPage = ({ children, type }: Props) => (
  <BoxMainPageContainer type={type}>
    <div>{children}</div>
  </BoxMainPageContainer>
)
export default BoxMainPage
