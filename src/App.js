import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home.lazy";
import About from "./pages/About/About.lazy";
import BookSpaceModal from "./pages/BookSpace/BookSpaceModal";
import { BookSpaceConfirmation } from "./pages/BookSpace/BookSpaceConfirmation";

function App() {
  return (
    <div className="App">
      <h1>Book it now</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<About />} />
        <Route path="/signup" element={<About />} />
        <Route path="/forgot-password" element={<About />} />
        <Route path="/reset-password" element={<About />} />
        <Route path="/me" element={<About />} />
        <Route path="/bookings" element={<About />} />
        <Route path="/book-space" element={<BookSpaceModal />} />
        <Route
          path="/book-space-confirmation"
          element={<BookSpaceConfirmation />}
        />
      </Routes>
    </div>
  );
}

export default App;
