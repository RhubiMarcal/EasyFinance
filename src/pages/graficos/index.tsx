import { useNavigate } from 'react-router-dom'
import Loader from '../../components/Loader'
import Footer from '../../containers/footer'
import Header from '../../containers/header'
import { useGetHistoricoQuery } from '../../service/Hooks/userAPI'
import { Container, MainDashboard, TitleSecondary } from '../../styles'
import backIcon from '../../assets/img/voltar.png'
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'
import { GraficosContainer } from './styles'
import BoxMainPage from '../../components/boxMainPage'
import { useMemo, useState } from 'react'

type DataPizza = {
  category: string
  value: number
}[]

type DataGastoGanho = {
  month: string
  gasto: number
  ganho: number
}[]

const Graficos = () => {
  const { data: allHistorico, isLoading } = useGetHistoricoQuery()
  const navigate = useNavigate()
  const [pizzaMes, setPizzaMes] = useState(() => {
    const hoje = new Date()
    const ano = hoje.getFullYear()
    const mes = String(hoje.getMonth() + 1).padStart(2, '0')
    return `${ano}-${mes}`
  })
  const [graficoAno, setGraficoAno] = useState(() => {
    const hoje = new Date()
    return String(hoje.getFullYear())
  })

  const anoMaisAntigo = useMemo(() => {
    if (!allHistorico || allHistorico.length === 0)
      return new Date().getFullYear()

    const anos = allHistorico.map((t) => new Date(t.date).getFullYear())
    return Math.min(...anos)
  }, [allHistorico])

  const anos = useMemo(() => {
    const anoAtual = new Date().getFullYear()
    const inicio = anoMaisAntigo || 1999
    return Array.from({ length: anoAtual - inicio + 1 }, (_, i) =>
      String(inicio + i)
    )
  }, [anoMaisAntigo])

  const DataPizza: DataPizza = (allHistorico ?? [])
    .filter((t) => t.type === 'gasto' && t.date.slice(0, 7) === pizzaMes)
    .map((t) => ({
      category: t.category,
      value: t.value
    }))
    .sort((a, b) => b.value - a.value)

  const anoAtual = new Date().getFullYear()

  const mesesDoAno = Array.from({ length: 12 }, (_, i) => {
    const mes = String(i + 1).padStart(2, '0')
    return `${anoAtual}-${mes}`
  })

  const dataGastoGanho: DataGastoGanho = mesesDoAno.map((month) => {
    const transacoesDoMes = (allHistorico ?? []).filter(
      (t) =>
        t.date.startsWith(month) && new Date(t.date).getFullYear() === anoAtual
    )

    const gasto = transacoesDoMes
      .filter((t) => t.type === 'gasto')
      .reduce((soma, t) => soma + t.value, 0)

    const ganho = transacoesDoMes
      .filter((t) => t.type === 'ganho')
      .reduce((soma, t) => soma + t.value, 0)

    return { month, gasto, ganho }
  })

  const COLORS = [
    '#0088FE', // azul
    '#00C49F', // verde água
    '#FFBB28', // amarelo
    '#FF8042', // laranja
    '#A28DFF', // roxo claro
    '#FF6384', // rosa
    '#36A2EB', // azul claro
    '#FFCE56', // amarelo claro
    '#4BC0C0', // verde piscina
    '#9966FF', // roxo
    '#F67019', // laranja queimado
    '#C9CBCF', // cinza claro
    '#FD6C9E', // rosa chiclete
    '#3E95CD', // azul royal
    '#8E5EA2', // lilás escuro
    '#B3E283' // verde limão
  ]
  return (
    <MainDashboard>
      <Header page="MainPage" />
      <GraficosContainer>
        <Container>
          <nav>
            <button type="button" onClick={() => navigate('/MainPage')}>
              <img src={backIcon} alt="voltar" />
            </button>
            <TitleSecondary>Graficos</TitleSecondary>
          </nav>
          <div>
            <BoxMainPage type="painel">
              <>
                <h2>Gráfico de Gasto Mensal</h2>
                <PieChart width={400} height={400}>
                  <Pie
                    data={DataPizza}
                    dataKey="value"
                    nameKey="category"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    fill="#8884d8"
                    label={({ name, value }) =>
                      `${value.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      })}`
                    }
                  >
                    {DataPizza.map((entry, index) => (
                      <Cell
                        key={`cell-${entry.category}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: number, name: string) => [
                      value.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      }),
                      name
                    ]}
                  />
                  <Legend />
                </PieChart>
                <div className="inputDiv">
                  <label htmlFor="mes">Mês: </label>
                  <input
                    id="mes"
                    name="mes"
                    type="month"
                    min={1999}
                    max={new Date().getFullYear()}
                    value={pizzaMes}
                    onChange={(e) => setPizzaMes(e.target.value)}
                  />
                </div>
              </>
            </BoxMainPage>
            <BoxMainPage type="painel">
              <>
                <h2>Gráfico Anual</h2>
                <BarChart
                  width={1024}
                  height={300}
                  data={dataGastoGanho}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  barCategoryGap="5%"
                  barGap={5}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="gasto" fill="#B00020" />
                  <Bar dataKey="ganho" fill="#388E3C" />
                </BarChart>
                <div className="inputDiv">
                  <label htmlFor="ano">Ano: </label>
                  <select
                    id="ano"
                    name="ano"
                    value={graficoAno}
                    onChange={(e) => setGraficoAno(e.target.value)}
                  >
                    {anos.map((ano) => (
                      <option key={ano} value={ano}>
                        {ano}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            </BoxMainPage>
          </div>
        </Container>
      </GraficosContainer>
      <Footer />
      <Loader active={isLoading} type="grafico" />
    </MainDashboard>
  )
}

export default Graficos
