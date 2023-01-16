import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { HOME, ABOUT, CONTACT, PORTFOLIO } from "./const/routes";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Portfolio from "./pages/portfolio/Portfolio";
import About from "./pages/about/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={HOME} element={<Home />}></Route>
        <Route path={ABOUT} element={<About />}></Route>
        <Route path={PORTFOLIO} element={<Portfolio />}></Route>
        <Route path={CONTACT} element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
