import './styles.css'
import { Header } from "./components/header"
import { Home } from './components/Home'
import { ProdutosDestaques } from './components/produtos'
import { Categotias } from './components/categorias'
import { Sobre } from './components/sobre'
import { Footer } from './components/Footer'
function App() {

  return (
    <div className="container">
      <Header/>
      <Home/>
      <ProdutosDestaques/>
      <Categotias/>
      <Sobre/>
      <Footer/>
    </div>
  )
}

export default App
