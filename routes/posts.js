var express = require("express");
	router = express.Router();
	knex = require("../db/knex");

router.route('/')
.get((req, res) => {
	knex('posts')
		.select('user_id', 'title', 'content')
		.orderBy('user_id', 'asc')
		.then((posts) => {
			// render the view engine template w/ users passed in
			res.render('posts/index', {
				// the users key & value are the same so this is {users: users}
				posts
			});
		});
});


module.exports = router;
