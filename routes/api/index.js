const router = require('express').Router();
const userRoutes = requie('./user-routes.js');
const thoughtRoutes = require('./thought-routes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports - router;