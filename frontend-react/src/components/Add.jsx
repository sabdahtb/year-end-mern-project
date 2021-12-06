import React from "react";

export default function Add() {
  return (
    <div className="components">
      <form className="Tambah">
        <label>Menu :</label>
        <input type="text" name="nama" />
        <label>Harga :</label>
        <input type="number" name="harga" />
        <label>Kategori :</label>
        <select name="kategori">
          <option>Makanan</option>
          <option>Minuman</option>
          <option>Cemilan</option>
        </select>
        <button>Tambah Menu</button>
      </form>
    </div>
  );
}
