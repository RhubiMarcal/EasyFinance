import Warn from '../../assets/img/warn.png'
import { WarningContainer } from './styles'

const Warning = () => (
  <WarningContainer>
    <img src={Warn} alt="" />
    <p>Quase lá! Seu limite da categoria: Lazer, está se esgotando.</p>
    <div />
  </WarningContainer>
)
export default Warning
