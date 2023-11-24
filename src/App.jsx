import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Info from "./pages/Info/Info.jsx";
import Login from "./pages/Auth/Login.jsx";
import Signup from "./pages/Auth/Signup.jsx";
import Company from "./pages/Company/Company.jsx";

function Router() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route exact path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/info" element={<Info />} />
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

function App() {
  return <Router />;
}

export default App;
