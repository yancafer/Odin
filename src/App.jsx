import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Dashboard from "./pages/Dashboard";
import Estatisticas from "./pages/Estatisticas";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/estatisticas" element={<Estatisticas />} />
      </Routes>
    </Router>
  );
}

export default App;
