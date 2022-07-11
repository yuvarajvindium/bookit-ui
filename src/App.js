import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home.lazy";
import About from "./pages/About/About.lazy";
import Signin from "./pages/Signin/Signin.lazy";
import Signup from "./pages/Signup/Signup.lazy";
import Forgotpassword from "./pages/Forgotpassword/Forgotpassword.lazy";
import Resetpassword from "./pages/Resetpassword/Resetpassword.lazy";
import BookSpaceModal from "./pages/BookSpace/BookSpaceModal";
import MyProfile from "./pages/MyProfile/MyProfile.lazy";
import MyBookings from "./pages/MyBookings/MyBookings.lazy";
import { BookSpaceConfirmation } from "./pages/BookSpace/BookSpaceConfirmation";
import BookSpaceForm from "./pages/BookSpace/BookSpaceForm";

function App() {
  return (
    <div className="App">
      <h1>Book it now</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/me" element={<MyProfile />} />
        <Route path="/bookings" element={<MyBookings />} />
        <Route path="/book-space" element={<BookSpaceModal />} />
        <Route path="/new-book-space" element={<BookSpaceForm />} />
        <Route
          path="/book-space-confirmation"
          element={<BookSpaceConfirmation />}
        />
      </Routes>
    </div>
  );
}

export default App;
