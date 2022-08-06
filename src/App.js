import { Routes, Route, Link } from "react-router-dom";
import Personal from "./components/Personal";
import { Container, Typography } from "@mui/material";
import "./App.css";
import Home from "./components/Home";
import List from "./components/List";

function App() {
  return (
    <Container className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/list/:list" element={<List/>} />
        
      </Routes>
    </Container>
  );
}

export default App
