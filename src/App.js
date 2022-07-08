import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home.lazy';
import About from './pages/About/About.lazy';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<About />} />
        <Route path="/signup" element={<About />} />
        <Route path="/forgot-password" element={<About />} />
        <Route path="/reset-password" element={<About />} />
        <Route path="/me" element={<About />} />
        <Route path="/bookings" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
