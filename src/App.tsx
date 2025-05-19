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
    </>
  )
}

export default App
