const express = require('express');
const users = require('../controllers/user.js');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/login', users.login);
router.route('/user').get(auth, users.getAll).post(users.create);
router.route('/user/getById/:id').get(auth, users.findById)
router.route('/user/updateById/:id').put(auth, users.updateById);
router.route('/user/me').get(auth, users.getLoggedUser).delete(auth, users.deleteLoggedUser);

module.exports = router;
