import React, { useState } from "react";

export default function Add({ storeData }) {
  const [menu, setMenu] = useState("");
  const [harga, setHarga] = useState("");
  const [kategori, setKategori] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const menus = { menu: menu, harga: harga, kategori: kategori };
    storeData(menus);
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

  return (
    <div className="components">
      <form className="Tambah" onSubmit={handleSubmit}>
        <label>Menu :</label>
        <input type="text" name="menu" value={menu} onChange={handleMenu} />
        <label>Harga :</label>
        <input
          type="number"
          name="harga"
          value={harga}
          onChange={handleHarga}
        />
        <label>Kategori :</label>
        <select name="kategori" onChange={handleKategori}>
          <option>Pilih Kategori...</option>
          <option>Makanan</option>
          <option>Minuman</option>
          <option>Cemilan</option>
        </select>
        <button>Tambah Menu</button>
      </form>
    </div>
  );
}
