import { Nav } from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chasier from "./components/Chasier";
import Add from "./components/Add";
import Edit from "./components/Edit";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/kafe")
      .then((response) => {
        setMenu(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Chasier menu={menu} />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
