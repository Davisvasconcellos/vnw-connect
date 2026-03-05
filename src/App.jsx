import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./GlobalStyles.scss"
import Header from "./components/header/Header"
import PaginaInicial from "./pages/paginainicial/PaginaInicial"
import Doacao from "./pages/doacao/Doacao"
import Voluntariado from "./pages/voluntariado/Voluntariado"
import Mentoria from "./pages/mentoria/Mentoria"
import EventosEP from "./pages/eventosep/Eventosep"
import Usuario from "./pages/usuario/Usuario"
import Footer from "./components/footer/Footer"

const App = () => {
return (
<BrowserRouter>
<Header/>
  <Routes>
    <Route path="/" element={<PaginaInicial/>}/>
    <Route path="/doacao" element={<Doacao />}/>
    <Route path="/voluntariado" element={<Voluntariado />}/>
    <Route path="/mentoria" element={<Mentoria />}/>
    <Route path="/eventosEP" element={<EventosEP />}/>
    <Route path="/usuario" element={<Usuario />}/>
  </Routes>
  <Footer/>
</BrowserRouter>
)
}

export default App