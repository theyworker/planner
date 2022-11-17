import { Routes, Route, Link } from "react-router-dom";
// import Personal from "./components/Personal";
import { Container, Typography } from "@mui/material";
import "./App.css";
import Home from "./components/Home";
import List from "./components/List";
import { Calendar } from "./components/Calendar";

function App() {
  return (
    <Container className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/personal" element={<Personal />} /> */}
        <Route path="/list/:list" element={<List/>} />
        <Route path="/calendar" element={<Calendar/>} />
        
      </Routes>
    </Container>
  );
}

export default App
