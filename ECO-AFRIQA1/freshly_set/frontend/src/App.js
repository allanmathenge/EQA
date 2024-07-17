import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Mission from './components/Mission';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
    </Routes>
</Router>

  );
}

export default App;
