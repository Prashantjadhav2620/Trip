import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Service from "./routes/Service";
import About from "./routes/About";
import Singup from "./routes/sign";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singup" element={<Singup />} />
      </Routes>
    </div>
  );
}
