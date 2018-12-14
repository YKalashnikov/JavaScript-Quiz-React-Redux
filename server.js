const express = require("express");

const server = express();
const quiz = require("./quiz.json");
server.use(express.json());
server.get("/api/quiz", (req, res) => {
  res.json({ ok: true, quiz });
});

server.post("/api/quiz", (req, res) => {
  const answers = req.body.answers;

  const results = quiz.reduce(
    (results, question, index) => {
      const answer = answers[index];
      if (question.answer === answer) {
        results.correct += 1;
      } else {
        results.incorrect += 1;
      }
      return results;
    },
    { correct: 0, incorrect: 0, total: quiz.length }
  );
  res.json({ ok: true, results });
});

const port = 3000;
server.listen(port, () => console.log(`Server is running on  ${port} port`));
