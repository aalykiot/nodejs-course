const express = require('express');

// Local imports
const controller = require('../controllers/bookController');

// create express router
const router = express.Router();

router.get('/v1/books', controller.getAll);
router.get('/v1/books/:id', controller.getById);
router.post('/v1/books', controller.create);
router.put('/v1/books/:id', controller.update);
router.delete('/v1/books/:id', controller.remove);

module.exports = router;
