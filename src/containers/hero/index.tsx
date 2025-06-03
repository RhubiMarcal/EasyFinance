import { useEffect, useState } from 'react'
import FormModel from '../../components/Forms'
import { Container, TitlePrimary } from '../../styles'
import * as S from './styles'
import Button from '../../components/Button'
import { usePostLoginMutation, usePostUsuarioMutation } from '../../service/api'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const [formActive, setFromActive] = useState<'login' | 'cadastro'>('login')
  const [formIsActive, setFromIsActive] = useState<boolean>(false)
  const [largura, setLargura] = useState(window.innerWidth)
  const [cadastrar] = usePostUsuarioMutation()
  const [login] = usePostLoginMutation()
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigator = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      setLargura(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleCadastro = async (req: User, e: React.FormEvent) => {
    e.preventDefault()
    const res = await cadastrar(req)
    if (res?.data) {
      navigator('/mainPage')
    }
  }

  const handleLogin = async (req: UserLogin, e: React.FormEvent) => {
    e.preventDefault()
    const res = await login(req)
    if (res?.data) {
      navigator('/mainPage')
    }
  }

  return (
    <S.HeroContainer formActive={formIsActive}>
      <Container>
        <div>
          <TitlePrimary>EasyFinance</TitlePrimary>
          <p>
            Plataforma ideal para gerenciar suas finanças de forma simples e
            eficiente. Organize seu orçamento, acompanhe seus gastos e tome
            decisões financeiras mais assertivas com facilidade e segurança.
          </p>
          {largura < 1024 && (
            <Button
              onClick={() => setFromIsActive(true)}
              color="green"
              type="button"
            >
              <>entrar</>
            </Button>
          )}
        </div>
        <div className="Overlay" onMouseDown={() => setFromIsActive(false)}>
          <div onMouseDown={(e) => e.stopPropagation()}>
            {formActive == 'login' ? (
              <FormModel
                onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                  handleLogin({ email, password }, e)
                }
                title="Login"
              >
                <>
                  <div className="inputDiv">
                    <label htmlFor="email">Email: </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      id="email"
                      type="email"
                    />
                  </div>
                  <div className="inputDiv">
                    <label htmlFor="senha">Senha: </label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      name="senha"
                      id="senha"
                      type="password"
                    />
                  </div>
                </>
              </FormModel>
            ) : (
              <FormModel
                onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                  handleCadastro({ name: userName, email, password }, e)
                }
                title="Cadastro"
              >
                <>
                  <div className="inputDiv">
                    <label htmlFor="userName">Usuario: </label>
                    <input
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      name="userName"
                      id="userName"
                      type="text"
                    />
                  </div>
                  <div className="inputDiv">
                    <label htmlFor="email">Email: </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      id="email"
                      type="email"
                    />
                  </div>
                  <div className="inputDiv">
                    <label htmlFor="senha">Senha: </label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      name="senha"
                      id="senha"
                      type="password"
                    />
                  </div>
                </>
              </FormModel>
            )}
            <S.ToggleButton>
              <button onClick={() => setFromActive('login')}>Login</button>
              <button onClick={() => setFromActive('cadastro')}>
                Cadastro
              </button>
              <div className={formActive} />
            </S.ToggleButton>
          </div>
        </div>
      </Container>
    </S.HeroContainer>
  )
}

export default Hero
