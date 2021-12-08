import React, { useState } from "react";

export default function Chasier({ kafes, fails, loads }) {
  const [pesan, setpesan] = useState([]);
  const [harga, setHarga] = useState(0);

  const handleKlik = (id) => {
    const pesanan = kafes.filter((kafe) => kafe._id === id);
    setpesan((prevPesan) => [...prevPesan, pesanan[0]]);
    setHarga((prevHarga) => prevHarga + pesanan[0].harga);
  };

  return (
    <div className="chasier">
      <div className="kiri">
        {loads && (
          <div className="loading">
            <h2>Loading...</h2>
          </div>
        )}

        {fails && (
          <div className="fail">
            <h2>{fails}</h2>
          </div>
        )}

        <h2 className="judul">Minuman</h2>

        {kafes &&
          kafes
            .filter((kafe) => kafe.kategori === "minuman")
            .map((menus, index) => (
              <div
                className="menu"
                key={index}
                onClick={() => handleKlik(menus._id)}
              >
                <h2>{menus.menu}</h2>
                <h5>Rp.{menus.harga}</h5>
              </div>
            ))}

        <h2 className="judul">Cemilan</h2>

        {kafes &&
          kafes
            .filter((kafe) => kafe.kategori === "cemilan")
            .map((menus, index) => (
              <div
                className="menu"
                key={index}
                onClick={() => handleKlik(menus._id)}
              >
                <h2>{menus.menu}</h2>
                <h5>Rp.{menus.harga}</h5>
              </div>
            ))}

        <h2 className="judul">Makanan</h2>

        {kafes &&
          kafes
            .filter((kafe) => kafe.kategori === "makanan")
            .map((menus, index) => (
              <div
                className="menu"
                key={index}
                onClick={() => handleKlik(menus._id)}
              >
                <h2>{menus.menu}</h2>
                <h5>Rp.{menus.harga}</h5>
              </div>
            ))}
      </div>
      <div className="kanan">
        <h3 className="judulpesan">Pesanan</h3>

        {pesan &&
          pesan.map((pesanan, index) => (
            <div className="pesanan" key={index}>
              <h5>
                {pesanan.menu} : {pesanan.harga}
              </h5>
              <button>Hapus</button>
            </div>
          ))}

        <div className="harga">
          <h3>total bayar : Rp.</h3>
          <input
            type="number"
            name="harga"
            value={harga}
            onChange={() => setHarga(harga)}
          />
        </div>
      </div>
    </div>
  );
}
