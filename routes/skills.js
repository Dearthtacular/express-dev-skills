var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills')

 // All actual paths start with "/skills"

// GET /skills
router.get('/', skillsCtrl.index);

// GET request to /skills/new
router.get('/new', skillsCtrl.new);

// POST request to /skills
router.post('/', skillsCtrl.create);

// DELETE request to /skills
router.delete('/:id', skillsCtrl.delete)

// GET /skills/:id
router.get('/:id', skillsCtrl.show);

module.exports = router;
