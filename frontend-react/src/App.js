import { Nav } from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chasier from "./components/Chasier";
import Add from "./components/Add";
import Edit from "./components/Edit";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function App() {
  const [kafes, setKafes] = useState([]);
  const [loads, setLoads] = useState(true);
  const [fails, setFails] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/kafe")
      .then((response) => {
        setKafes(response.data);
      })
      .catch((error) => {
        setFails(error.message);
      })
      .finally(() => {
        setLoads(false);
      });
  }, []);

  function storeData(menus) {
    axios
      .post("http://localhost:4000/kafe/add", menus)
      .then(() => {
        setKafes((prevKafes) => [...prevKafes, menus]);
        Swal.fire({
          icon: "success",
          title: "Berhasil !!",
          text: "Menu telah ditambahkan",
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            exact
            element={<Chasier kafes={kafes} fails={fails} loads={loads} />}
          />
          <Route path="/add" element={<Add storeData={storeData} />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
