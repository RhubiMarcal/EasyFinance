import { Route, Routes as RouteList } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import MainPage from '../pages/MainPage'

const Routes = () => (
  <RouteList>
    <Route path="/" element={<LandingPage />} />
    <Route path="/MainPage" element={<MainPage />} />
  </RouteList>
)

export default Routes
