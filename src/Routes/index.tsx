import { Route, Routes as RouteList } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import MainPage from '../pages/MainPage'
import ProtectedRoute from './protectedRoute'
import Historico from '../pages/historico'
import Limites from '../pages/limite'
import Goals from '../pages/Goal'
import Details from '../pages/details'
import Graficos from '../pages/graficos'

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
      path="/limites/details/:id"
      element={
        <ProtectedRoute loader="limit">
          <Details type="Limites" />
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
    <Route
      path="/metas/details/:id"
      element={
        <ProtectedRoute loader="meta">
          <Details type="Metas" />
        </ProtectedRoute>
      }
    />
    <Route
      path="/grafico"
      element={
        <ProtectedRoute loader="meta">
          <Graficos />
        </ProtectedRoute>
      }
    />
  </RouteList>
)

export default Routes
