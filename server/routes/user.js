const users = require('../controllers/user.js');
const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/login', users.login);
router.route('/user').get(auth, users.getAll).post(users.create);
router.route('/user/:id').get(auth, users.findById).put(auth, users.updateById);
router.route('/user/me').get(auth, users.getLoggedUser).delete(auth, users.deleteLoggedUser);

module.exports = router;
