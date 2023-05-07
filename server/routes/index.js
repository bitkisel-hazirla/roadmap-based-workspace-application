const express = require('express');
const userRoutes = require('./user.js');
const roadmapRoutes = require('./roadmap.js');

const router = express.Router();

router.use('/user', userRoutes);
router.use('/roadmap', roadmapRoutes);

module.exports = router;
