const router = require('express').Router();

const { addComment, removeComment } = require('../../controllers/comment-controller');

// add comment to pizza
// /api/comments/<pizzaId>
router
.route('/:pizzaId')
.post(addComment);

// delete comment from pizza
// /api/comments/<pizzaId>/<commentId>
router
.route('/:pizzaId/:commentId')
.delete(removeComment);

module.exports = router;