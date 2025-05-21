import Contato from './containers/Contato'
import Footer from './containers/Footer'
import Habilidades from './containers/Habilidades'
import Header from './containers/Header/index'
import Home from './containers/Hero'
import Projetos from './containers/Projetos'
import EstiloGlobal from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Home />
      <Projetos />
      <Habilidades />
      <Contato />
      <Footer />
    </>
  )
}

export default App
