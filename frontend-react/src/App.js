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
    getdata();
  }, []);

  function getdata() {
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
  }

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
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  }

  function deleteData(id) {
    Swal.fire({
      title: "Yakin ingin Menghapus Menu?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yakin dan Hapus!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete("http://localhost:4000/kafe/delete/" + id)
          .then(() => {
            const newKafes = kafes.filter((kafe) => kafe._id !== id);
            setKafes(newKafes);
          })
          .catch((error) =>
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.message,
            })
          );
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }

  function editData(menus) {
    axios
      .put("http://localhost:4000/kafe/update/" + menus.id, menus)
      .then(() => {
        setKafes((prevKafes) => [...prevKafes, menus]);
        Swal.fire({
          icon: "success",
          title: "Berhasil !!",
          text: "Menu telah di Update!!",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
    getdata();
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
          <Route
            path="/edit"
            element={
              <Edit kafes={kafes} deleteData={deleteData} editData={editData} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
