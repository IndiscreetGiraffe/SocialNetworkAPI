const router = require('express').Router();
const { addThought, deleteThought, addReaction, getThoughts, getThoughtById, updateThought, deleteReaction } = require('../../controllers/thought-controller');


router.route('/:id').post(addThought);

router.route('/:id')
.get(getThoughtById)
.delete(deleteThought)

router.route('/').get(getThoughts);

router.route('/:id').put(updateThought);

router.route('/:id/reactions').post(addReaction);

router.route('/:id/reactions/:reactionId').delete(deleteReaction);

module.exports = router;