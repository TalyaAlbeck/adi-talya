var express = require('express');
var router = express.Router();
const fs = require('fs');


function ls(name) {
  console.log(name);

  fs.readdir("folders", (err, res) => {
    if (err) {
      console.log(err);
    }
    else {
      console.log(res);
      for (let i = 0; i < res.length; i++) {
        fs.stat(`./folders/${res[i]}`, (err, stats) => {
          if (err) {
            console.error(err);
            return;
          }
          if (res[i] === name) {
            console.log("the folder is " + name + "!!!");
            return "found!";
          }
          // stats.isFile(); // true
          if (stats.isFile()) { console.log(res[i] + " is a file") }
          else console.log(res[i] + " is a folder")
        })

      }
    }

  })
}


router.post('/', (req, res) => {
  console.log(req.body);

  res.send(ls(req.body.username))
})

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// ls()
module.exports = router;
