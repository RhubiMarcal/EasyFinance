import Button from '../Button'
import { AsideUserContainer, Overlay } from './styles'
import fotoUser from '../../assets/img/UserFoto.png'
import { TitleSecondary } from '../../styles'
import FormModel from '../Forms'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from '../Loader'
import {
  useEditNomeMutation,
  useEditSenhaMutation,
  useGetMeQuery,
  useLogoutMutation
} from '../../service/Hooks/userAPI'
import { useDispatch } from 'react-redux'
import { baseAPI } from '../../service/api'

type Props = {
  active: boolean
  onClose: () => void
}

const AsideUser = ({ active, onClose }: Props) => {
  const dispatch = useDispatch()
  const [editName, setEdtName] = useState(false)
  const [editPassword, setEdtPassword] = useState(false)
  const [newName, setNewName] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [password, setPassword] = useState('')
  const [PUTEditNome, { isLoading: loadingEditNome }] = useEditNomeMutation()
  const [PUTEditPassword, { isLoading: loadingEditPassword }] =
    useEditSenhaMutation()
  const { data: userData, isLoading: loadingUser } = useGetMeQuery()
  const [logout] = useLogoutMutation()
  const navigate = useNavigate()

  const handleCloseEditName = () => {
    setEdtName(true)
    setEdtPassword(false)
  }

  const handleCloseEditPassword = () => {
    setEdtName(false)
    setEdtPassword(true)
  }

  const handleSubmitEditNome = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await PUTEditNome({ newName, password })
      setEdtName(false)
      setNewName('')
      setPassword('')
      setNewPassword('')
    } catch (err) {
      console.error('Erro ao editar nome:', err)
    }
  }

  const handleSubmitEditPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await PUTEditPassword({ newPassword, currentPassword: password })
      setEdtPassword(false)
      setNewName('')
      setPassword('')
      setNewPassword('')
    } catch (err) {
      console.error('Erro ao editar senha:', err)
    }
  }

  const handleLogout = async () => {
    try {
      await logout().unwrap()
      dispatch(baseAPI.util.resetApiState())
      navigate('/')
    } catch (err) {
      console.error('Erro ao deslogar:', err)
    }
  }

  return (
    <>
      <Overlay onMouseDown={onClose} $active={active}>
        <AsideUserContainer onMouseDown={(e) => e.stopPropagation()}>
          <div>
            <img src={fotoUser} alt="foto do usuário" />
            <TitleSecondary>{userData?.name}</TitleSecondary>
            <Button
              onClick={handleCloseEditName}
              color="darkBlue"
              type="button"
            >
              <>Mudar Nome de Usuário </>
            </Button>
            <Button
              onClick={handleCloseEditPassword}
              color="darkBlue"
              type="button"
            >
              <>Mudar Senha</>
            </Button>
          </div>
          <Button onClick={() => handleLogout()} type="button" color="green">
            <>Logout</>
          </Button>
          <div onClick={onClose} className="Close">
            X
          </div>
        </AsideUserContainer>
      </Overlay>
      {editName && (
        <FormModel
          onClose={() => setEdtName(false)}
          title="alterar Nome"
          active={editName}
          isModal
          onSubmit={(e) => handleSubmitEditNome(e)}
        >
          <>
            <div className="inputDiv">
              <label htmlFor="newName">Novo nome: </label>
              <input
                id="newName"
                name="newName"
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </div>
            <div className="inputDiv">
              <label htmlFor="password">Senha: </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" color="green">
              <>alterar</>
            </Button>
          </>
        </FormModel>
      )}

      {editPassword && (
        <FormModel
          onClose={() => setEdtPassword(false)}
          title="alterar Senha"
          active={editPassword}
          isModal
          onSubmit={(e) => handleSubmitEditPassword(e)}
        >
          <>
            <div className="inputDiv">
              <label htmlFor="newPassword">Nova senha: </label>
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="inputDiv">
              <label htmlFor="password">Senha: </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" color="green">
              <>alterar</>
            </Button>
          </>
        </FormModel>
      )}
      <Loader
        active={loadingEditNome || loadingEditPassword || loadingUser}
        type="padrao"
      />
    </>
  )
}

export default AsideUser
