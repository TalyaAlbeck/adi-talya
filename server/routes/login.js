var http = require('http');
var express = require('express');
var router = express.Router();
const fs = require('fs');
const { ls } = require("../folderHandler")

router.post('/', async (req, res) => {
    console.log("body: ", req.body);
    try {
        //accses
        await fs.promises.access(`folders/${req.body.username}`)
    } catch (err) {
        res.status(404)
        res.send(JSON.stringify("this user already exists"))
        return;
    }
    res.send(await ls(req.body.username))
})

module.exports = router;



// const app = express()
// const port = 3000


// // http.createServer(function (req, res) {

