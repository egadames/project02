const connection = require('../config/connection');
const flashCardQueries = require('../models/flashcard/flashCardQueries');

module.exports = {
  getAllFlashCards: async (req, res) => {
    try {
      const [flashcards] = await connection.query(flashCardQueries.findAllFlashCards);
      return res.status(200).json(flashcards);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  addFlashCard: async (req, res) => {
    const { question, answer } = req.body;
    if (!answer || !question) {
      return res.json({ error: 'You must provide text for FlashCards' });
    }
    try {
      const [response] = await connection.query(flashCardQueries.addFlashCard, [question, answer]);
      const [flashcards] = await connection.query(flashCardQueries.findFlashCardById, response.insertId);
      return res.json(flashcards[0]);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  getFlashCardById: async (req, res) => {
    const { id } = req.params;
    try {
      const [flashcards] = await connection.query(flashCardQueries.findFlashCardById, id);
      res.status(200).json(flashcards[0]);
    } catch (e) {
      res.status(403).json({ e });
    }
  },
  deleteFlashCardById: async (req, res) => {
    const { id } = req.params;
    try {
      await connection.query(flashCardQueries.deleteFlashCardById, id);
      const [flashcards] = await connection.query(flashCardQueries.findAllFlashCards);
      res.status(200).json(flashcards);
    } catch (e) {
      res.status(403).json({ e });
    }
  },
  updateFlashCardById: async (req, res) => {
    const { id } = req.params;
    const { question, answer } = req.body;
    try {
      await connection.query(flashCardQueries.updateFlashCardById, [question, answer, id]);
      const [flashcards] = await connection.query(flashCardQueries.findFlashCardById, id);
      res.status(200).json(flashcards[0]);
    } catch (e) {
      res.status(403).json({ e });
    }
  },
};
