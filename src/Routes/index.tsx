import { Route, Routes as RouteList } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import MainPage from '../pages/MainPage'
import ProtectedRoute from './protectedRoute'
import Historico from '../pages/historico'
import Limites from '../pages/limite'
import Goals from '../pages/Goal'

const Routes = () => (
  <RouteList>
    <Route path="/" element={<LandingPage />} />
    <Route
      path="/mainPage"
      element={
        <ProtectedRoute loader="padrao">
          <MainPage />
        </ProtectedRoute>
      }
    />
    <Route
      path="/historico"
      element={
        <ProtectedRoute loader="historico">
          <Historico />
        </ProtectedRoute>
      }
    />
    <Route
      path="/limites"
      element={
        <ProtectedRoute loader="limit">
          <Limites />
        </ProtectedRoute>
      }
    />
    <Route
      path="/metas"
      element={
        <ProtectedRoute loader="meta">
          <Goals />
        </ProtectedRoute>
      }
    />
  </RouteList>
)

export default Routes
