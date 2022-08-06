import { Routes, Route, Link } from "react-router-dom";
import Personal from "./components/Personal";
import { Container, Typography } from "@mui/material";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <Container className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal" element={<Personal />} />
      </Routes>
    </Container>
  );
}

export default App
