var express = require('express'); 
var router = express.Router(); 

router.route('/posts')

	// returns all posts
	.get(function(req, res) {
		// temp solution
		res.send({message: 'TODO return all posts'});
	})

	.post(function(req, res) {
		// temp solution
		res.send({message: 'TODO create new post'})
	})
module.exports = router; 