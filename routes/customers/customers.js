const express = require('express');
const router = express.Router();

let customers = [
  {
    name: "Google"
  },
  {
    name: "Microsoft"
  },
  {
    name: "Facebook"
  },
];

/* GET customers listing. */
router.get('/', (req, res, next) => {
  res.render("customers", {
    title: "Customer",
    data: customers
  });
});

module.exports = router;
