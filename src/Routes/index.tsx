import { Route, Routes as RouteList } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import MainPage from '../pages/MainPage'
import ProtectedRoute from './protectedRoute'

const Routes = () => (
  <RouteList>
    <Route path="/" element={<LandingPage />} />
    <Route
      path="/MainPage"
      element={
        <ProtectedRoute>
          <MainPage />
        </ProtectedRoute>
      }
    />
  </RouteList>
)

export default Routes
