import Button from '../Button'
import { AsideUserContainer, Overlay } from './styles'
import fotoUser from '../../assets/img/UserFoto.png'
import { TitleSecondary } from '../../styles'

type Props = {
  active: boolean
  onClose: () => void
}

const AsideUser = ({ active, onClose }: Props) => (
  <Overlay onMouseDown={onClose} $active={active}>
    <AsideUserContainer onMouseDown={(e) => e.stopPropagation()}>
      <div>
        <img src={fotoUser} alt="foto do usuário" />
        <TitleSecondary>Kaique</TitleSecondary>
        <Button color="darkBlue" type="button">
          <>Mudar Nome de Usuário </>
        </Button>
        <Button color="darkBlue" type="button">
          <>Mudar Senha</>
        </Button>
      </div>
      <Button type="button" color="green">
        <>Logout</>
      </Button>
      <div onClick={onClose} className="Close">
        X
      </div>
    </AsideUserContainer>
  </Overlay>
)

export default AsideUser
