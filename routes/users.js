var express = require("express");
	router = express.Router();
	knex = require("../db/knex");

router.route('/')
// get all users
.get((req, res) => {
  knex('users')
    .select('id','fullname','username')
		.orderBy('id', 'asc')
    .then((users) => {
			// render the view engine template w/ users passed in
      res.render('users/index', {
				// the users key & value are the same so this is {users: users}
        users
      });
		});
})

.post(function(req, res){
  knex('users')
    .insert({
      fullname: req.body.user.fullname,
      username: req.body.user.username,
      id: req.body.user.id
    })
    .returning('id')
    .then(function(id) {
      res.redirect(`/users/${id}`);
    });
});

router.route('/new')
.get((req, res) => {
	  res.render('users/new');
	});

router.route('/:id')
	.delete((req, res) => {
		knex('users')
			.del()
			.where({
				id: req.params.id
			})
			.then(() => {
				res.redirect(`/users`);
			});
	})
	.get((req, res) => {
	  knex('users')
	    .select('id', 'username', 'fullname')
	    .where({ id: req.params.id })
			// limit 1
	    .first()
	    .then((user) => {
				// this passes the user to the ejs template
	      res.render('users/show', {
	        user
	      });
	    });
	})
	.put((req, res) => {
	knex('users')
		.update({
			id: req.params.id,
			fullname: req.body.user.full_name,
			username: req.body.user.username
		})
		.where({
			id: req.params.id
		})
		.then(() => {
			res.redirect(`/users/${req.params.id}`);
		});
});

	router.route('/:id/edit')
		.get((req, res) => {
		  knex('users')
		    .select('id', 'username', 'fullname')
		    .where({ id: req.params.id })
				// limit 1
		    .first()
		    .then((user) => {
					// this passes the user to the ejs template
		      res.render('users/edit', {
		        user
		      });
		    });
		});

	router.route('/:id/delete')
	.get( (req, res) => {
		knex('users')
			.select('id', 'username', 'fullname')
			.where({
				id: req.params.id
			})
			.first()
			.then((user) => {
				res.render('users/delete', {
					user
				});
			});
		});

		router.route('/:id/posts')
		    .get(function(req, res) {
					const data = {};
	        knex('posts')
	          .select('user_id','title', 'content')
	          .where({
	             user_id: req.params.id
	          })
	          .then((posts) => {
							data.posts=posts;
							return knex('users')
								.select('id')
								.where({
									id: req.params.id
								})
								.first()
	          })
						.then((user) => {
							if (!user) {
								res.status(404).send('This user is not in table');
								return
							}
							data.user=user;
							res.render('posts/show', data);
						});
		    })
		    .post(function(req, res) {
		        knex('posts').insert({
						user_id: req.params.id,
						title: req.body.post.title,
						content: req.body.post.content
					}
				).then(function(posts) {
		                res.redirect(`/users/${req.params.id}/posts`)
		            });
		    });
module.exports = router;
