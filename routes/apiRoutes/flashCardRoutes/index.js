const router = require('express').Router();
// /api/todos prepended to every route inside of here
const flashCardController = require('../../../controllers/flashCardController');

// /api/todos
router.route('/')
  .get(flashCardController.getAllFlashCards)
  .post(flashCardController.addFlashCard);

// // /api/FlashCardss/:id
router.route('/:id')
  .get(flashCardController.getFlashCardById)
  .delete(flashCardController.deleteFlashCardById)
  .patch(flashCardController.updateFlashCardById);

module.exports = router;
