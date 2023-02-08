import Home from "./Components/Home";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import "./styles.css";
import Error from "./Components/Error";
import Insta from "./Components/Insta";
import Facebook from "./Components/Facebook";
import UserDetails from "./Components/UserDetails";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/home/:userId" element={<UserDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}>
            <Route index element={<Insta />} />
            <Route index path="instagram" element={<Insta />} />
            <Route path="facebook" element={<Facebook />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
