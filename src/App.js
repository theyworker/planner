import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import { Container, Typography } from "@mui/material";
// import {AddEmployee} from './components/Home/AddEmployee'
// import {EditEmployee} from './components/Home/EditEmployee'
// import { DeleteEmployee } from "./components/Home/DeleteEmployee";
import './App.css'

function App() {
  return (
    <Container className="App"  >
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/add" element={<AddEmployee/>} />
        <Route path="/edit/:id" element={<EditEmployee />} />
        <Route path="/delete/:id" element={<DeleteEmployee />} /> */}
      </Routes>
    </Container>
  
  );
}

export default App;