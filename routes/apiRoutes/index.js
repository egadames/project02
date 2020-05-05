const router = require('express').Router();
const flashcardRoutes = require('./flashCardRoutes');

// /api prepended to everyRoute inside of here
router.use('/flashcard', flashcardRoutes);

module.exports = router;
