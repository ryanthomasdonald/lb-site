const express = require("express");
const router = express.Router();
const dataFile = require("../data/album-data.json");
let albumList = dataFile.albums;

router.get("/albums", (req, res) => {
    res.render("albums", {
        albums: albumList,
        pageTitle: "Albums"
    })
})

router.get("/albums/:albumid", (req, res) => {
    let singleAlbum = req.params.albumid;
    let currentAlbum = [];
    
    albumList.forEach(albumObj => {
        if(albumObj.shortName === singleAlbum){
            currentAlbum.push(albumObj);
        };
    });

    res.render("albums", {
        albums: currentAlbum,
        pageTitle: `${currentAlbum[0].albumName}`
    })
})

module.exports = router;