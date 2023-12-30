const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');

router.get('/characters', characterController.getAllCharacters);
router.get('/characters/:id', characterController.getCharacterById);

module.exports = router;
