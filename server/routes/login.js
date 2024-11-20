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
                fs.stat(path.join(__dirname, `..`, `/folders/${res[i]}`)th.join(__dirname, `..`, `/folders/${res[i]}`), (err, stats) => {
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

router.post('/', (req, res) => {
    console.log(req.body);
    //create new folder 
    const content = fs.readFile('/Users/joe/test.html', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
      });
    fs.appendFile(JSON.stringify(req.body.username), content, err => {
        if (err) {
            console.error(err);
        } else {
            // done!
        }
    });
    //all the foledrs
    res.send(ls(req.body.username))
})

module.exports = router;



// const app = express()
// const port = 3000


// // http.createServer(function (req, res) {

