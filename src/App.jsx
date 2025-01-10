import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Congrats from "./page/Congrats";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/congrats" element={<Congrats />} />
      </Routes>
    </Router>
  )
}