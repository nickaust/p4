const express = require("express");
const app = express();
const {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
} = require("./p4-module.js");

// Route: /cit/question
app.get("/cit/question", (req, res) => {
  res.json({
    error: "",
    statusCode: 200,
    questions: getQuestions(),
  });
});

// Route: /cit/answer
app.get("/cit/answer", (req, res) => {
  res.json({
    error: "",
    statusCode: 200,
    answers: getAnswers(),
  });
});

// Route: /cit/questionanswer
app.get("/cit/questionanswer", (req, res) => {
  res.json({
    error: "",
    statusCode: 200,
    questions_answers: getQuestionsAnswers(),
  });
});

// Route: /cit/question/:number
app.get("/cit/question/:number", (req, res) => {
  const result = getQuestion(req.params.number);
  res.json({
    error: result.error,
    statusCode: result.error ? 400 : 200,
    question: result.question,
    number: result.number,
  });
});

// Route: /cit/answer/:number
app.get("/cit/answer/:number", (req, res) => {
  const result = getAnswer(req.params.number);
  res.json({
    error: result.error,
    statusCode: result.error ? 400 : 200,
    answer: result.answer,
    number: result.number,
  });
});

// Route: /cit/questionanswer/:number
app.get("/cit/questionanswer/:number", (req, res) => {
  const result = getQuestionAnswer(req.params.number);
  res.json({
    error: result.error,
    statusCode: result.error ? 400 : 200,
    question: result.question,
    answer: result.answer,
    number: result.number,
  });
});

// Unmatched route handler
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
    statusCode: 404,
  });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
