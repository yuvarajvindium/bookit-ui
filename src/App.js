import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home.lazy';
import About from './pages/About/About.lazy';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup.lazy';
import Forgotpassword from './pages/Forgotpassword/Forgotpassword.lazy';


function App() {
  return (
    <div className="App">
      {window.location.pathname !== "/signup" &&
        window.location.pathname !== "/forgot-password"
        ? <h1>Book it now</h1> : null}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/reset-password" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/me" element={<About />} />
        <Route path="/bookings" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
