import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Chasier({ kafes, fails, loads, storeLaba }) {
  const [pesan, setPesan] = useState([]);
  const [harga, setHarga] = useState(0);
  const [riwayat, setRiwayat] = useState([]);
  const [laba, setLaba] = useState(0);

  const handlePesan = (id) => {
    const getPesanan = kafes.filter((kafe) => kafe._id === id);
    const pesanan = {
      qty: 1,
      menu: getPesanan[0].menu,
      harga: getPesanan[0].harga,
    };
    setPesan((prevPesan) => [...prevPesan, pesanan]);
    setHarga((prevHarga) => prevHarga + pesanan.harga);
  };

  const handleTambah = (id) => {
    setHarga((prevHarga) => prevHarga + pesan[id].harga);
    pesan[id].qty = pesan[id].qty + 1;
    setPesan(pesan);
  };

  const handleKurang = (id) => {
    setHarga((prevHarga) => prevHarga - pesan[id].harga);
    pesan[id].qty = pesan[id].qty - 1;
    setPesan(pesan);
  };

  const handleBayar = () => {
    if (harga === 0) {
      Swal.fire("Mau bayar apa?", "Pesanannya masih kosong loh", "question");
    } else {
      let jam = new Date().getHours();
      let menit = new Date().getMinutes();
      let bulan = new Date().toLocaleString(navigator.language, {
        month: "long",
      });
      let tanggal = new Date().getDate();
      let tahun = new Date().getFullYear();
      let hari = new Date().toLocaleString(navigator.language, {
        weekday: "long",
      });

      if (jam < 10) {
        jam = "0" + jam;
      }

      if (menit < 10) {
        menit = "0" + menit;
      }

      const newRiwayat = {
        tanggal: `${hari}, ${tanggal} ${bulan} ${tahun}`,
        jam: `${jam} : ${menit}`,
        harga: harga,
      };
      setRiwayat((prevRiwayat) => [...prevRiwayat, newRiwayat]);
      setHarga(0);
      setPesan([]);
      setLaba((prevLaba) => prevLaba + harga);

      Swal.fire({
        icon: "success",
        title: "Terimakasih :D",
        text: "Semoga harimu menyenangkan",
      });
    }
  };

  const handleSetor = () => {
    if (laba === 0) {
      Swal.fire("Mau setor apa?", "Labanya masih kosong loh", "question");
    } else {
      let bulan = new Date().toLocaleString(navigator.language, {
        month: "long",
      });
      let tanggal = new Date().getDate();
      let tahun = new Date().getFullYear();
      const setoran = {
        tanggal: `${tanggal} ${bulan} ${tahun}`,
        pendapatan: laba,
      };
      storeLaba(setoran);
      setPesan([]);
      setRiwayat([]);
      setLaba(0);
      setHarga(0);
    }
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
                onClick={() => handlePesan(menus._id)}
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
                onClick={() => handlePesan(menus._id)}
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
                onClick={() => handlePesan(menus._id)}
              >
                <h2>{menus.menu}</h2>
                <h5>Rp.{menus.harga}</h5>
              </div>
            ))}
      </div>
      <div className="kanan">
        <h3 className="judulpesan">Pesanan</h3>

        <table>
          <thead>
            <tr>
              <th>Pesanan</th>
              <th>Qty</th>
              <th>Aksi</th>
              <th>Harga</th>
            </tr>
          </thead>
          <tbody>
            {pesan &&
              pesan
                .filter((pesanans) => pesanans.qty > 0)
                .map((pesanan, index) => (
                  <tr className="pesanan" key={index}>
                    <td>{pesanan.menu}</td>
                    <td>
                      <h5>{pesanan.qty}</h5>
                    </td>
                    <td>
                      <button
                        className="kurang"
                        onClick={() => handleKurang(index)}
                      >
                        - 1
                      </button>
                      <button
                        className="tambah"
                        onClick={() => handleTambah(index)}
                      >
                        + 1
                      </button>
                    </td>
                    <td>{pesanan.qty * pesanan.harga}</td>
                  </tr>
                ))}
          </tbody>
        </table>

        <div className="harga">
          <h3>Total Bayar : Rp.{harga}</h3>
          <button onClick={() => handleBayar()}>Bayar Sekarang</button>
        </div>

        <h3 className="judulpesan">History</h3>

        {riwayat &&
          riwayat.map((riwayats, index) => (
            <div className="riwayat" key={index}>
              <h5>{riwayats.tanggal}</h5>
              <h5>{riwayats.jam}</h5>
              <h5>{riwayats.harga}</h5>
            </div>
          ))}
        <div className="setor">
          <button onClick={() => handleSetor()}>Setor Total : {laba}</button>
        </div>
      </div>
    </div>
  );
}
