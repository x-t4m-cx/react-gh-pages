import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';
import News from './pages/News';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Навигационное меню */}
        <nav style={{ padding: '20px', backgroundColor: '#282c34', color: 'white' }}>
          <Link to="/" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>
            Home
          </Link>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>
            About
          </Link>
          <Link to="/news" style={{ color: 'white', textDecoration: 'none' }}>
            News
          </Link>
        </nav>

        {/* Маршрутизация */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;