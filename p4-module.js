const { data } = require("./p4-data.js");

// Part 5 module functions
function getQuestions() {
  return data.map((item) => item.question);
}

function getAnswers() {
  return data.map((item) => item.answer);
}

function getQuestionsAnswers() {
  return data.map((item) => ({ question: item.question, answer: item.answer }));
}

function getQuestion(number = "") {
  let error = "";
  let question = "";
  let num = "";

  if (number === "" || Number.isNaN(Number(number))) {
    error = "Question number must be an integer";
  } else if (Number(number) < 1) {
    error = "Question number must be >= 1";
  } else if (Number(number) > data.length) {
    error = `Question number must be less than the number of questions (${data.length})`;
  } else {
    question = data[Number(number) - 1].question;
    num = Number(number);
  }

  return {
    error,
    question,
    number: num,
  };
}

function getAnswer(number = "") {
  let error = "";
  let answer = "";
  let num = "";

  if (number === "" || Number.isNaN(Number(number))) {
    error = "Answer number must be an integer";
  } else if (Number(number) < 1) {
    error = "Answer number must be >= 1";
  } else if (Number(number) > data.length) {
    error = `Answer number must be less than the number of questions (${data.length})`;
  } else {
    answer = data[Number(number) - 1].answer;
    num = Number(number);
  }

  return {
    error,
    answer,
    number: num,
  };
}

function getQuestionAnswer(number = "") {
  let error = "";
  let question = "";
  let answer = "";
  let num = "";

  if (number === "" || Number.isNaN(Number(number))) {
    error = "Question number must be an integer";
  } else if (Number(number) < 1) {
    error = "Question number must be >= 1";
  } else if (Number(number) > data.length) {
    error = `Question number must be less than the number of questions (${data.length})`;
  } else {
    question = data[Number(number) - 1].question;
    answer = data[Number(number) - 1].answer;
    num = Number(number);
  }

  return {
    error,
    question,
    answer,
    number: num,
  };
}

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
  console.log(`\n** Testing ${category} **`);
  console.log("-------------------------------");
  for (const o of args) {
    console.log(`-> ${category}${o.d}:`);
    console.log(o.f);
  }
}

// Set a constant to true to test the appropriate function
const testGetQs = false;
const testGetAs = false;
const testGetQsAs = false;
const testGetQ = false;
const testGetA = false;
const testGetQA = false;

// getQuestions()
if (testGetQs) {
  testing("getQuestions", { d: "()", f: getQuestions() });
}

// getAnswers()
if (testGetAs) {
  testing("getAnswers", { d: "()", f: getAnswers() });
}

// getQuestionsAnswers()
if (testGetQsAs) {
  testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}

// getQuestion()
if (testGetQ) {
  testing(
    "getQuestion",
    { d: "()", f: getQuestion() }, // Extra credit: +1
    { d: "(0)", f: getQuestion(0) }, // Extra credit: +1
    { d: "(1)", f: getQuestion(1) },
    { d: "(4)", f: getQuestion(4) } // Extra credit: +1
  );
}

// getAnswer()
if (testGetA) {
  testing(
    "getAnswer",
    { d: "()", f: getAnswer() }, // Extra credit: +1
    { d: "(0)", f: getAnswer(0) }, // Extra credit: +1
    { d: "(1)", f: getAnswer(1) },
    { d: "(4)", f: getAnswer(4) } // Extra credit: +1
  );
}

// getQuestionAnswer()
if (testGetQA) {
  testing(
    "getQuestionAnswer",
    { d: "()", f: getQuestionAnswer() }, // Extra credit: +1
    { d: "(0)", f: getQuestionAnswer(0) }, // Extra credit: +1
    { d: "(1)", f: getQuestionAnswer(1) },
    { d: "(4)", f: getQuestionAnswer(4) } // Extra credit: +1
  );
}

module.exports = {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer
};