import './App.css';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import {Login, Home, Consumidor, Expand, AddContrato, Fechado} from './Screens';

function App() {
  let id = useParams();
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LogIn/:id" element={<Login />} />
          <Route path="/Consumidor" element={<Consumidor />} />
          <Route path="/Consumidor/:id" element={<Expand />} />
          <Route path="/Consumidor/AdicionarContrato" element={<AddContrato />} />
          <Route path="/Consumidor/ContratoFechado" element={<Fechado />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
