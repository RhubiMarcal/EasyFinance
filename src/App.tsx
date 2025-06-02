import LandingPage from './pages/LandingPage'
import { Store } from './store'
import GlobalStyles from './styles'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={Store}>
      <GlobalStyles />
      <LandingPage />
    </Provider>
  )
}

export default App
