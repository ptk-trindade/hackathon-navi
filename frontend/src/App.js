import './App.css';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import {Login, Home} from './Screens';

function App() {
  let id = useParams();
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LogIn/:id" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
