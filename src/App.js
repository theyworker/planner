import { Routes, Route, Link } from "react-router-dom";
// import Personal from "./components/Personal";
import { Container, Typography } from "@mui/material";
import "./App.css";
import Home from "./components/Home";
import List from "./components/List";
import { Calendar } from "./components/Calendar";
import { DateSelect } from "./components/Calendar/DateSelect";

function App() {
  return (
    <Container className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/personal" element={<Personal />} /> */}
        <Route path="/list/:list" element={<List />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/date-select" element={<DateSelect />} />
      </Routes>
    </Container>
  );
}

export default App;
