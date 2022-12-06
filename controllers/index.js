const router = require('express').Router();

// connects to the api routes and home route
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// which route to use to reach the controller routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
