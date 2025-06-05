import { Container, TitleSecondary } from '../../styles'
import { FuncoesContainer } from './styles'

const Funcoes = () => {
  const funcList = [
    'Gastos e ganhos por categoria',
    'Limites mensais por orçamento',
    'Gráficos de consumo',
    'Metas de economia'
  ]

  return (
    <FuncoesContainer id="Funcionalidades">
      <Container>
        <TitleSecondary>
          Funcionalidades Financeiras Essenciais no EasyFinance
        </TitleSecondary>
        <ul>
          {funcList.map((func, index) => (
            <li key={index}>
              <p>{func}</p>
            </li>
          ))}
        </ul>
      </Container>
    </FuncoesContainer>
  )
}

export default Funcoes
