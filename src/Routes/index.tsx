import { Route, Routes as RouteList } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import MainPage from '../pages/MainPage'
import ProtectedRoute from './protectedRoute'
import Historico from '../pages/historico'
import Limites from '../pages/limite'

const Routes = () => (
  <RouteList>
    <Route path="/" element={<LandingPage />} />
    <Route
      path="/MainPage"
      element={
        <ProtectedRoute loader="padrao">
          <MainPage />
        </ProtectedRoute>
      }
    />
    <Route
      path="/Historico"
      element={
        <ProtectedRoute loader="historico">
          <Historico />
        </ProtectedRoute>
      }
    />
    <Route
      path="/Limites"
      element={
        <ProtectedRoute loader="limit">
          <Limites />
        </ProtectedRoute>
      }
    />
  </RouteList>
)

export default Routes
