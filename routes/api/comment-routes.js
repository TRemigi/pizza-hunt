const router = require('express').Router();

const { addComment, removeComment, addReply, removeReply } = require('../../controllers/comment-controller');

// add comment to pizza
// /api/comments/<pizzaId>
router
.route('/:pizzaId')
.post(addComment);

// delete comment from pizza
// /api/comments/<pizzaId>/<commentId>
router
.route('/:pizzaId/:commentId')
.put(addReply)
.delete(removeComment);

// delete reply to comment
// /api/comments/<pizzaId/<commentId>/<replyId>
router
.route('/:pizzaId/:commentId/:replyId')
.delete(removeReply);

module.exports = router;