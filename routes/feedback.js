const express = require("express");
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended: true}));

// read and write to file
const fs = require("fs");

// import contents of json file
const feedbackData = require("../data/feedback.json");   // converted to JS object: name, title, message

router.get("/feedback", (req, res) => {
    res.render("feedback");
});

// gets all of the messages from feedback.json
router.get("/api", (req, res) => {
    res.json(feedbackData);
});

router.post("/api", (req, res) => {
    // grab data from header (need body parser)
    let {name, title, message} = req.body;
    console.log(req.body)
    // push (unshift) retrieved data to feedbackData object
    feedbackData.unshift(req.body);                            // this is JS object
    // save to feedback.json file
    fs.writeFile("data/feedback.json", JSON.stringify(feedbackData), "utf8", (err) => {
        if(err){
            console.log(err);
        };
        console.log("File has been updated.");
    });
    res.json(feedbackData)
});

module.exports = router;