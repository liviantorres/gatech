import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio/Inicio';
import Sobre from './pages/Sobre/Sobre';
import Acoes from './pages/Acoes/Acoes';
import Contatos from './pages/Contatos/Contatos';
import QuemSomos from './pages/QuemSomos/QuemSomos';
import Podcast from './pages/PodCast/PodCast';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/acoes" element={<Acoes />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/contatos" element={<Contatos />} />
            <Route path="/podcast" element={<Podcast />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
