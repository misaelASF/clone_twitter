const router = require('express').Router();

const TweetController = require('./controllers/TweetControllers');
const LikeController = require('./controllers/LikeController');

router.get('/tweets', TweetController.index);
router.post('/tweets', TweetController.store);

router.post('/likes/:id', LikeController.store);

module.exports = router;