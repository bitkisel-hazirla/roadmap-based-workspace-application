const express = require('express');
const periods = require('../controllers/period');
const auth = require('../middleware/auth');

const router = express.Router();

router
  .route('/period')
  .post(periods.create)
  .get(auth, periods.getByUserId)
  .put(auth, periods.update);

router.route('/period/:date').get(auth, periods.getByDate).delete(auth, periods.delete);
router.route('/latest-periods/:daysBack').get(auth, periods.getLatestPeriods);

module.exports = router;
