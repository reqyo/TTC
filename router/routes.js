const express = require("express");
const makeRequest = require('../util/makeRequest');
const router = express.Router();


router.get("/", (req, res) => {
  res.send({ connected: "OK!" });
});

router.get("/search/repositories/language/:language", (req, res) => {
  makeRequest(req.params.language)
    .then(repos => {
      res.status(200).send(repos);
    })
    .catch(err => {
      res.status(404).send(err)
    });
});


module.exports = router;