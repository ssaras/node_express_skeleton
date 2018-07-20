const express = require('express');
const router = express.Router();

let home = [
  {
    name: "Los Angeles"
  },
  {
    name: "New york City"
  }
];

/* GET home listing. */
router.get('/', (req, res, next) => {
  res.render("home", {
      title: "Home",
      data: home
    });
});

module.exports = router;