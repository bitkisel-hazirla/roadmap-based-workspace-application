const express = require('express');
const concept = require('../controllers/concept.js');
const auth = require('../middleware/auth');

const router = express.Router();

router.route('/concept').post(auth, concept.create);
router.route('/concept/:id').get(auth, concept.findById).delete(auth, concept.delete);
router.route('/concept/getByRoadmap/:roadmap_id').get(auth, concept.findByRoadmapId);

module.exports = router;
