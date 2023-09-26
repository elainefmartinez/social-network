const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// /api/thought
router.route('/').get(getThoughts).post(createThought);

// /api/thought/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thought/:thoughtId/reactions
// router.route('/:thoughtId/reaction').post(createReaction);

// /api/thought/:thoughtId/reacitons/:reactionId
// router.route('/:thoughtId/reaction/:assignmentId').delete(deleteReaction);

module.exports = router;
