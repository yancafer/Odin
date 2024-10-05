/*Importação para Rotas */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* Importação de componentes*/
import Menu from "./components/Menu";
import Footer from "./components/Footer";

/* Importação de páginas */
import Dashboard from "./pages/Dashboard";
import Estatisticas from "./pages/Estatisticas";

/* Importação de estilos */
import "./index.css";


function App() {
  return (
    <div className="app-container">
      <Router>
        <Menu />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/estatisticas" element={<Estatisticas />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;