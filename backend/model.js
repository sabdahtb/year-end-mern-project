const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const kafeMenu = new Schema({
  menu: { type: "string" },
  harga: { type: "number" },
  kategori: { type: "string" },
  tanggal: { type: "string" },
  pendapatan: { type: "number" },
});

module.exports = mongoose.model("Kafe", kafeMenu);
