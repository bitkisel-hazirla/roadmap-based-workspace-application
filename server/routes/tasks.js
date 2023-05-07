const express = require('express');
const tasks = require('../controllers/task.js');
const auth = require('../middleware/auth');

const router = express.Router();

router.route('/task').post(auth, tasks.create);
router.route('/tasks').get(auth, tasks.getAll);
router.route('/task/:id').get(auth, tasks.getById).delete(auth, tasks.delete).put(auth, tasks.updateById);

module.exports = router;
