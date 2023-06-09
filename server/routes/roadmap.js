const express = require('express');
const roadmap = require('../controllers/roadmap');
const auth = require('../middleware/auth');
const router = express.Router();

router.route('/roadmap').post(auth, roadmap.create).get(auth, roadmap.getAll);
router.route('/roadmap/:id').get(auth, roadmap.findById).delete(auth, roadmap.delete);

module.exports = router;
