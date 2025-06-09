import Footer from '../../containers/footer'
import Header from '../../containers/header'
import Painel from '../../containers/painel'
import Welcome from '../../containers/welcome'

const MainPage = () => (
  <>
    <Header page="MainPage" />
    <Welcome />
    <Painel />
    <Footer />
  </>
)

export default MainPage
