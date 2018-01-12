const router = require("express").Router();
const userRoutes = require("./users");
const coinRoutes = require("./coins");

// Book routes
router.use('/users', userRoutes);
router.use("/coins", coinRoutes);

module.exports = router;
