import React, { useState } from "react";

export default function Edit({ kafes, deleteData, editData }) {
  const [menu, setMenu] = useState("");
  const [harga, setHarga] = useState("");
  const [kategori, setKategori] = useState("");
  const [IDmenu, setIDmenu] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const menus = { id: IDmenu, menu: menu, harga: harga, kategori: kategori };
    editData(menus);
  };

  const handleMenu = (e) => {
    setMenu(e.target.value);
  };

  const handleHarga = (e) => {
    setHarga(e.target.value);
  };

  const handleKategori = (e) => {
    setKategori(e.target.value.toLowerCase());
  };

  const tampilEdit = (id) => {
    const menuEdit = kafes.filter((menu) => menu._id === id);
    setMenu(menuEdit[0].menu);
    setHarga(menuEdit[0].harga);
    setKategori(menuEdit[0].kategori);
    setIDmenu(menuEdit[0]._id);
  };

  return (
    <div className="edits">
      <div className="editsKiri">
        <div className="tabel">
          <table>
            <thead>
              <tr>
                <th>Menu</th>
                <th>Harga</th>
                <th>Kategori</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody>
              {kafes &&
                kafes
                  .filter((menu) => menu.kategori === "minuman")
                  .map((menus, index) => (
                    <tr key={index}>
                      <td>{menus.menu}</td>
                      <td>{menus.harga}</td>
                      <td>{menus.kategori}</td>
                      <td>
                        <button
                          className="edit"
                          onClick={() => tampilEdit(menus._id)}
                        >
                          Edit
                        </button>
                        <button
                          className="hapus"
                          onClick={() => deleteData(menus._id)}
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
              {kafes &&
                kafes
                  .filter((menu) => menu.kategori === "cemilan")
                  .map((menus, index) => (
                    <tr key={index}>
                      <td>{menus.menu}</td>
                      <td>{menus.harga}</td>
                      <td>{menus.kategori}</td>
                      <td>
                        <button
                          className="edit"
                          onClick={() => tampilEdit(menus._id)}
                        >
                          Edit
                        </button>
                        <button
                          className="hapus"
                          onClick={() => deleteData(menus._id)}
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
              {kafes &&
                kafes
                  .filter((menu) => menu.kategori === "makanan")
                  .map((menus, index) => (
                    <tr key={index}>
                      <td>{menus.menu}</td>
                      <td>{menus.harga}</td>
                      <td>{menus.kategori}</td>
                      <td>
                        <button
                          className="edit"
                          onClick={() => tampilEdit(menus._id)}
                        >
                          Edit
                        </button>
                        <button
                          className="hapus"
                          onClick={() => deleteData(menus._id)}
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="editsKanan">
        <form className="Tambah" onSubmit={handleSubmit}>
          <label>Menu :</label>
          <input
            type="text"
            name="menu"
            value={menu}
            onChange={handleMenu}
            required
          />
          <label>Harga :</label>
          <input
            type="number"
            name="harga"
            value={harga}
            onChange={handleHarga}
            required
          />
          <label>Kategori :</label>
          <select name="kategori" onChange={handleKategori} required>
            <option>Pilih Kategori...</option>
            <option>Makanan</option>
            <option>Minuman</option>
            <option>Cemilan</option>
          </select>
          <button className="edit">Update Menu</button>
        </form>

        <h3 className="his">Riwayat Penjualan Harian</h3>
        {kafes &&
          kafes
            .filter((kafe) => kafe.tanggal !== undefined)
            .map((labas, index) => (
              <div className="labas" key={index}>
                <h5>{labas.tanggal}</h5>
                <h5>Rp.{labas.pendapatan}</h5>
              </div>
            ))}
      </div>
    </div>
  );
}
