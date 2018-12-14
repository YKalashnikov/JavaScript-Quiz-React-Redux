import * as actions from "./helpers";

export default function reducer(state, action) {
  switch (action.type) {
    case actions.GET_QUESTIONS:
      return {
        ...state,
        questions: action.questions,
        loading: false
      };
    case actions.COMMIT_ANSWER_FORWARD:
      return {
        ...state,
        answers: [...state.answers, action.answer],
        currentQuestionIndex: state.currentQuestionIndex + 1
      };
    case actions.COMMIT_ANSWER_BACK:
      return {
       ...state,
        answers: [...state.answers],
        currentQuestionIndex: state.currentQuestionIndex - 1
      };
    /*   case actions.NEXT_QUESTION:
      return {
        ...state, 
        currentQuestionIndex: state.currentIndex + 1
      } */
    case actions.GET_RESULTS:
      return {
        ...state,
        results: action.results,
        loading: false
      };
    case actions.END_QUIZ:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
