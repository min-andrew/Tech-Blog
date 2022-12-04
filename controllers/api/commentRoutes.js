const router = require('express').Router();
const { Comment, Blog, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [{ model: User }, { model: Blog }],
        });
        // serialize 
        const comments = commentData.map((comment) => comment.get({ plain: true }));

        console.log(comments);

        res.render('blog', { comments, loggedIn: req.session.loggedIn });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            user_id: req.session.user_id,
            post_id: req.body.postId,
            content: req.body.commentBody,
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
