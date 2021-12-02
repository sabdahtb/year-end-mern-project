const Kafe = require("./model");
const express = require("express");

const akses = express.Router();

akses.route("/").get((req, res) => {
  Kafe.find()
    .then((menus) => res.status(200).json(menus))
    .catch((error) => res.status(400).json(error.message));
});

akses.route("/delete/:id").delete((req, res) => {
  Kafe.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("menu  telah dihapus"))
    .catch((error) => res.status(400).json(error.message));
});

akses.route("/update/:id").put((req, res) => {
  Kafe.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedMenu) => res.status(200).json(updatedMenu))
    .catch((error) => res.status(400).json(error.message));
});

akses.route("/add").post((req, res) => {
  Kafe.create(req.body)
    .then((creeatedMenu) => res.status(200).json(creeatedMenu))
    .catch((error) => res.status(400).json(error.message));
});
module.exports = akses;
