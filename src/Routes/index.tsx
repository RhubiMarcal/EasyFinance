import { Route, Routes as RouteList } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import MainPage from '../pages/MainPage'
import FunctionModel from '../containers/ModelFunctions'

type itensListType = [
  {
    value: number
    date: string
    category: string
    type: 'ganho' | 'gasto'
  }
]

const itensList: itensListType = [
  {
    value: 100.0,
    date: '11/11/2001',
    category: 'Avião',
    type: 'gasto'
  }
]

const Routes = () => (
  <RouteList>
    <Route path="/" element={<LandingPage />} />
    <Route path="/MainPage" element={<MainPage />} />
    <Route
      path="/historico"
      element={<FunctionModel itemList={itensList} name="Historico" />}
    />
  </RouteList>
)

export default Routes
