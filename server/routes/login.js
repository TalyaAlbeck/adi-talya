var http = require('http');
var express = require('express');
var router = express.Router();
const fs = require('fs');
const { ls } = require("../folderHandler")

router.post('/', async (req, res) => {
    console.log("body: ", req.body);

    if (!req.body.username) {
        // to do: return an error
        res.status(404)
        res.send(JSON.stringify("unvalid"))
        return
    }

    try {
        //accses
        let data = await fs.promises.readFile(`folders/${req.body.username}/${req.body.username}.json`)
        if (JSON.parse(data).password !== req.body.password) {
            res.status(404).send("name or password is incorrect")
            return
        }
    } catch (err) {
        res.status(404).send("this user is not exists")
        return;
    }
    res.send(await ls(req.body.username))
})

module.exports = router;



// const app = express()
// const port = 3000


// // http.createServer(function (req, res) {

