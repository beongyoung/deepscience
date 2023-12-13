import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Info from "./pages/Info/Info.jsx";
import Login from "./pages/Auth/Login.jsx";
import Signup from "./pages/Auth/Signup.jsx";
import Company from "./pages/Company/Company.jsx";
import News from "./pages/News/News.jsx";

function Router() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route exact path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="company">
          <Route path="clean-tech" element={<h1>Clean Tech</h1>} />
          <Route path="energy" element={<h1>Energy</h1>} />
          <Route path="mobility" element={<h1>Mobility</h1>} />
          <Route path="bio-health" element={<h1>Bio Health</h1>} />
          <Route path="robotics" element={<h1>Robotics</h1>} />
          <Route path="space" element={<h1>Space</h1>} />
        </Route>
        <Route path="/info" element={<Info />} />
        <Route path="/news" element={<News />} />
        <Route path="auth">
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="google" element={<h1>Google</h1>} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

function App() {
  return <Router />;
}

export default App;
