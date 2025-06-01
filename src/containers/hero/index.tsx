import { useEffect, useState } from 'react'
import FormModel from '../../components/Forms'
import { Container, TitlePrimary } from '../../styles'
import * as S from './styles'
import Button from '../../components/Button'

const Hero = () => {
  const [formActive, setFromActive] = useState<'login' | 'cadastro'>('login')
  const [formIsActive, setFromIsActive] = useState<boolean>(false)
  const [largura, setLargura] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setLargura(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

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
              <FormModel title="Login">
                <>
                  <div className="inputDiv">
                    <label htmlFor="email">Email: </label>
                    <input name="email" id="email" type="password" />
                  </div>
                  <div className="inputDiv">
                    <label htmlFor="name">Senha: </label>
                    <input name="name" id="name" type="text" />
                  </div>
                </>
              </FormModel>
            ) : (
              <FormModel title="Cadastro">
                <>
                  <div className="inputDiv">
                    <label htmlFor="userName">Usuario: </label>
                    <input name="userName" id="userName" type="password" />
                  </div>
                  <div className="inputDiv">
                    <label htmlFor="email">Email: </label>
                    <input name="email" id="email" type="password" />
                  </div>
                  <div className="inputDiv">
                    <label htmlFor="name">Senha: </label>
                    <input name="name" id="name" type="text" />
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
