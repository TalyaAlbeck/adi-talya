var http = require('http');
var express = require('express');
var router = express.Router();
const fs = require('fs');
const { ls } = require("../folderHandler")

router.get('/:name', async (req, res) => {
  console.log("body: ", req.params.name);
  try {
    await fs.promises.access(`folders/${req.params.name}`)
      //take users files
    } catch (err) {
      res.status(404)
      res.send(JSON.stringify("files are missing"))
      return;
    }
    const userFiles = ls(req.params.name)
    console.log('req.params.name: ', req.params.name);
    res.send(JSON.stringify(userFiles))
  // res.send(await ls(req.body.username))
})

module.exports = router;
