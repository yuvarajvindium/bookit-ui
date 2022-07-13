import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.lazy";
import About from "./pages/About/About.lazy";
import Signin from "./pages/Signin/Signin.lazy";
import Signup from "./pages/Signup/Signup.lazy";
import Forgotpassword from "./pages/Forgotpassword/Forgotpassword.lazy";
import Resetpassword from "./pages/Resetpassword/Resetpassword.lazy";
import MyProfile from "./pages/MyProfile/MyProfile.lazy";
import MyBookings from "./pages/MyBookings/MyBookings.lazy";
import { BookSpaceConfirmation } from "./pages/BookSpace/BookSpaceConfirmation";
import BookSpaceForm from "./pages/BookSpace/BookSpaceForm";
import Layout from "./pages/Layout/Layout";
import BookSpace from "./pages/BookSpace/BookSpace.lazy";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<Forgotpassword />} />
          <Route path="/reset-password" element={<Resetpassword />} />
          <Route path="/me" element={<MyProfile />} />
          <Route path="/bookings" element={<MyBookings />} />
          <Route path="/book-space" element={<BookSpace />} />
          <Route path="/new-book-space" element={<BookSpaceForm />} />
          <Route
            path="/book-space-confirmation"
            element={<BookSpaceConfirmation />}
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
