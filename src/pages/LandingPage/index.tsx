import Funcoes from '../../containers/funcoes'
import Header from '../../containers/header'
import Hero from '../../containers/hero'
import Objetivo from '../../containers/objetivo'
import imgDespesas from '../../assets/img/despesas.png'
import imgRelatorios from '../../assets/img/relatorios.png'
import imgMetas from '../../assets/img/metas.png'
import imgOrcamento from '../../assets/img/orcamento.png'
import ModelSection, { props } from '../../containers/ModelSection'
import Footer from '../../containers/footer'

type listsection = props[]

const listSections: listsection = [
  {
    img: imgDespesas,
    text: 'Essa função permite que o usuário registre todo o dinheiro que entra (receitas) e sai (despesas) da sua conta. Cada movimentação pode ser classificada em categorias, como alimentação, transporte, moradia, lazer, entre outras. Isso ajuda a entender para onde o dinheiro está indo e quais são as principais fontes de gasto e de renda. \nAo manter esse registro atualizado, o usuário consegue ter uma visão clara e detalhada da sua situação financeira no dia a dia.',
    titulo: 'Controle de Despesas e Receitas '
  },
  {
    img: imgRelatorios,
    text: 'Entender seus gastos e ganhos fica muito mais fácil com os relatórios visuais do EasyFinance. Com gráficos intuitivos e resumos automáticos, você acompanha para onde seu dinheiro está indo e identifica padrões de consumo com rapidez. É uma forma simples e eficiente de tomar decisões mais conscientes e ajustar seus hábitos financeiros. ',
    titulo: 'Visualize seus hábitos com relatórios claros'
  },
  {
    img: imgMetas,
    text: 'Com o EasyFinance, você transforma sonhos em planos. Crie metas como fazer uma viagem, comprar algo especial ou montar uma reserva de emergência, e acompanhe sua evolução ao longo do tempo.',
    titulo: 'Alcance seus objetivos com metas financeiras'
  },
  {
    img: imgOrcamento,
    text: 'Com o EasyFinance, você define limites de gastos por categoria e acompanha o quanto já utilizou ao longo do mês. Assim, fica mais fácil se organizar, evitar excessos e manter o equilíbrio financeiro. A cada novo registro, você vê em tempo real o quanto ainda pode gastar — tudo de forma clara, prática e acessível. ',
    titulo: 'Mantenha o controle com orçamentos mensais'
  }
]

const LandingPage = () => (
  <>
    <Header page="landingPage" />
    <Hero />
    <Objetivo />
    <Funcoes />
    {listSections.map((section, index) => (
      <ModelSection
        titulo={section.titulo}
        text={section.text}
        img={section.img}
        key={index}
      />
    ))}
    <Footer startNow />
  </>
)

export default LandingPage
