import axios from "axios";
import * as helpers from "./helpers";

export const getQuestions = () => {
  return axios
    .get("/api/quiz")
    .then(res => res.data)
    .then(data => ({
      type: helpers.GET_QUESTIONS,
      questions: data.quiz
    }));
};
export const commitAnswer = answer => {
  return {
    type: helpers.COMMIT_ANSWER_FORWARD,
    answer
  };
};
export const commitBack = answer => {
  return {
    type: helpers.COMMIT_ANSWER_BACK,
    answer
  };
};
export const getResults = answers => {
  return axios
    .post("/api/quiz", { answers })
    .then(response => response.data)
    .then(data => ({
      type: helpers.GET_RESULTS,
      results: data.results
    }));
};
export const endQuiz = () => {
  return {
    type: helpers.END_QUIZ
  };
};
