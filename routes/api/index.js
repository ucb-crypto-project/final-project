const router = require("express").Router();
const userRoutes = require("./users");



// Book routes
router.use('/users', userRoutes);

const authRoutes = require('./auth');

// routes
// router.use('/users', userRoutes);
router.use('/auth', authRoutes);


module.exports = router;
