import "./App.css";
import Navbar from "./components/navbar/navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/home.jsx";
import About from "./components/pages/about/about.jsx";
import Profile from "./components/pages/profile/profile.jsx";
import Contact from "./components/pages/contact/contact.jsx";
import Login from "./components/pages/login/login.jsx";
import Services from "./components/pages/services/services.jsx";
import Signup from "./components/pages/signup/signup.jsx";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={[<Home />,<About/>,<Services></Services>,<Contact/>,<Login/>]} />
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services></Services>}/>
            <Route path="/contact" element={<Contact/>}/>
                <Route path="/login" element={<Login/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
