var http = require('http');
var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path')


function ls(name) {
    console.log(name);

    fs.readdir(path.join(__dirname, `..`, `/folders`), (err, res) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(res);
            for (let i = 0; i < res.length; i++) {
                fs.stat(path.join(__dirname, `..`, `/folders/${res[i]}`).path.join(__dirname, `..`, `/folders/${res[i]}`), (err, stats) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    if (res[i] === name) {
                        console.log("the folder is " + name + "!!!");
                        return "found!";
                    }
                    if (stats.isFile()) { console.log(res[i] + " is a file") }
                    else console.log(res[i] + " is a folder")
                })

            }
        }

    })
}

const options = {
    root: __dirname
}
const findUser = require("../folderHandler")

router.post('/', (req, res) => {
    console.log("body: ", req.body);
    res.send(findUser.ls(req.body.username))
})

module.exports = router;



// const app = express()
// const port = 3000


// // http.createServer(function (req, res) {

