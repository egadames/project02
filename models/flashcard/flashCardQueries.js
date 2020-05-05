// Get flashcard
const findAllFlashCards = 'SELECT * FROM flashcard;';
const findAllQuestions = 'SELECT question FROM flashcard;';
const findAllAnswers = 'SELECT answer FROM flashcard;';
const findFlashCardById = 'SELECT * FROM flashcard WHERE id  = ?;';
const findFlashCardCorrect = 'SELECT * FROM flashcard WHERE isCorrect  = true;';
const findFlashCardWrong = 'SELECT * FROM flashcard WHERE isCorrect  = false;';
// const findFlashCardById = 'SELECT * FROM flashcard WHERE id  = ?;';

// Adding flashcard
const addFlashCard = 'INSERT INTO flashcard (question, answer) VALUES("?", "?");';

// Deleting flashcard
const deleteFlashCardById = 'DELETE FROM flashcard WHERE id = ?;';

// Updating flashcard
const updateFlashCardById = 'UPDATE flashcard SET question = ?, answer = ? WHERE id = ?;';
const updateFlashCardQuestionById = 'UPDATE flashcard SET question = ? WHERE id = ?;';

module.exports = {
  findAllFlashCards,
  findAllQuestions,
  findAllAnswers,
  findFlashCardById,
  findFlashCardCorrect,
  findFlashCardWrong,
  addFlashCard,
  deleteFlashCardById,
  updateFlashCardQuestionById,
  updateFlashCardById,
};
