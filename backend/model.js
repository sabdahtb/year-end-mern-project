const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const kafeMenu = new Schema({
  menu: { type: string },
  harga: { type: number },
  kategori: { type: string },
});

const pendapatan = new Schema({
  tanggal: { type: string },
  harian: { type: number },
  mingguan: { type: nummber },
});

const Kafemenu = mongoose.model("Kafemenu", kafeMenu);
const Pendapatan = mongoose.model("Pendapatan", pendapatan);

module.exports = { Kafemenu, Pendapatan };
