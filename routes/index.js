const express = require('express');
const routes = require('express').Router();
const customers = require('./customers/customers');
const users = require('./users/users');
const home = require('./home/home');

// When people got to / (i.e. the homepage), send them to /home
routes.use('/', home);

// Define route for /home
routes.use('/home', home);

// Define route for /customers
routes.use('/customers', customers);

// Define route for /users
routes.use('/users', users);

module.exports = routes;

// const express = require('express');
// const router = express.Router();

// /* GET home page. */
// router.get('/', (req, res, next) => {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
