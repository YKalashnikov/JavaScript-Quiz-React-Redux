import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Quiz from "../components/Quiz";
import QuizResults from "../components/QuizResults";

import { Layout, Spinner } from "@codedojo/mdc-react";
import * as actions from "../store/actions";
import "./index.css";

class App extends Component {
  componentDidMount() {
  console.log(this.props)
    this.props.getQuestions();
  }
  handleComplete = () => {
    this.props.endQuiz();
    this.props.getResults(this.props.answers);
  };

  render() {
    const {
      question,
      questionPosition,
      numberOfQuestions,
      progress,
      commitAnswer,
      loading,
      hasNextQuestion,
      results,
      commitBack,
      hasNullQuestion
    } = this.props;

    if (loading) return <Spinner />;
    return (
      <Layout element="main">
        {results ? (
          <QuizResults
          results={results}
          />
        ) : (
          <Quiz
            question={question}
            questionPosition={questionPosition}
            numberOfQuestions={numberOfQuestions}
            progress={progress}
            onAnswer={commitAnswer}
            stepBack={commitBack}
            onComplete={this.handleComplete}
            hasNextQuestion={hasNextQuestion}
            beggining={hasNullQuestion}
          />
        )}
      </Layout>
    );
  }
}
const mapStateToProps = state => {
  const question = state.questions[state.currentQuestionIndex];
  const numberOfQuestions = state.questions.length;
  const questionPosition = state.currentQuestionIndex + 1;
  const hasNextQuestion = state.currentQuestionIndex < state.questions.length;
  const hasNullQuestion = state.currentQuestionIndex !== 0;
  const progress = (state.currentQuestionIndex  / numberOfQuestions ) * 100;
  return {
    answers: state.answers,
    results: state.results,
    loading: state.loading,
    question,
    numberOfQuestions,
    questionPosition,
    hasNextQuestion,
    progress,
    hasNullQuestion
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
/* 
export default connect(
  state => {
   // const currentQuestion = state.questions[state.currentQuestionIndex]
    //const questions = state.questions
    return {
      question:state.questions
    }
  },
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(App); */

/* dispatch => ({
  actions: bindActionCreators(actions, dispatch)
}) */
