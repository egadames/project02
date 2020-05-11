DROP DATABASE IF EXISTS flashcard_db;
CREATE DATABASE flashcard_db;
USE flashcard_db;
CREATE TABLE flashcard (
	id INT AUTO_INCREMENT NOT NULL,
    question VARCHAR(100) NOT NULL,
    answer VARCHAR(100) NOT NULL,
    correctCount INT NULL DEFAULT 0,
    isCorrect BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);
INSERT INTO flashcard (question, answer) VALUES("What day is it?", "Wednesday");