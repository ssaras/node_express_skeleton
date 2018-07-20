const express = require('express');
const router = express.Router();

let people = [
  {
    name: "Alice"
  },
  {
    name: "Bob"
  },
  {
    name: "Charlie"
  },
];

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render("users", {
    title: "Users",
    data: people
  });
});

module.exports = router;
