import Footer from '../../containers/footer'
import Header from '../../containers/header'
import MainPageButtons from '../../containers/MainPageButtons'
import Welcome from '../../containers/welcome'

const MainPage = () => (
  <>
    <Header page="MainPage" />
    <Welcome />
    <MainPageButtons />
    <Footer />
  </>
)

export default MainPage
