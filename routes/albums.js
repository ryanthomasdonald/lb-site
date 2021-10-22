const express = require("express");
const router = express.Router();
const dataFile = require("../data/data.json");
let albums = dataFile.albums;

router.get("/albums", (req, res) => {
    let albumCovers = [];
    albums.forEach(albumObj => {
        albumCovers = albumCovers.concat(albumObj.artwork)
    })
    res.render("albums", {
        artwork: albumCovers,
        albums: albums
    })
})

module.exports = router;