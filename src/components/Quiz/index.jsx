import React, { Component } from "react";
import {
  Card,
  CardHeader,
  LinearProgress,
  CardActions,
  Button,
  CardAction
} from "@codedojo/mdc-react";

import QuizQuestion from "../QuizQuestion";

class Quiz extends Component {
  state = {
    answer: undefined
  };
  handeClickAnswer = index => {
    this.setState({ answer: index });
  };
  handleNext = () => {
    this.setState({ answer: undefined });
      this.props.onAnswer(this.state.answer)
  };

  handleBack = () => {
    this.setState({ answer: undefined });
    this.props.stepBack(this.state.answer);
  };
  handleComplete = () => {
    this.setState({ answer: undefined });
    this.props.onComplete();
  };
  render() {
    const {
      question,
      questionPosition,
      numberOfQuestions,
      progress,
      hasNextQuestion
    } = this.props;

    const { answer } = this.state;
    return (
      <div>
        <Card>
          <CardHeader
            title="JavaScript Quiz"
            subtitle={
              hasNextQuestion &&
              `Questions ${questionPosition} from ${numberOfQuestions}`
            }
          />
          <LinearProgress value={progress} />
          {question && (
            <QuizQuestion
              question={question}
              answer={answer}
              onAnswer={this.handeClickAnswer}
            />
          )}

          <CardActions>
            <CardAction>
              <div>
                {hasNextQuestion ? (
                  <Button onClick={this.handleNext}>Next</Button>
                ) : (
                  <Button onClick={this.handleComplete}>Submit</Button>
                )}
                {/*  {beggining &&
                 <Button onClick={this.handleBack}>Back</Button> */}
              </div>
            </CardAction>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Quiz;
