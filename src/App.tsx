import { BrowserRouter } from 'react-router-dom'
import { Store } from './store'
import GlobalStyles from './styles'
import { Provider } from 'react-redux'
import Routes from './Routes'

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes />
      </BrowserRouter>
    </Provider>
  )
}

export default App
