import { Route, Routes as RouteList } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import MainPage from '../pages/MainPage'
import ProtectedRoute from './protectedRoute'
import Historico from '../pages/historico'

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
  </RouteList>
)

export default Routes
