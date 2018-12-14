import React from "react";
import { Card, Typography } from "@codedojo/mdc-react";
import spanchFail from '../../images/spanchFail.gif'
import spanchSuccess from '../../images/spanchSuccess.gif'

const QuizResults = ({ results }) => {
  return (
    <Card className="quiz-results">
      <Typography variant="headline4" align="center">
        The Test Is Over
      </Typography>
      <div style={{textAlign: "center"}}>
        YOU HAVE ANSWERED <h2 style={{ color: "red" }}>{results.correct}</h2>
        CORRECTLY OUT OF<h2 style={{ color: "red" }}>{results.total} </h2> 
     
      {results.total > results.correct ? <img src={spanchFail} alt="bob"/> :
    <img src={spanchSuccess} alt="bob"/>}
     </div>
      <h3 style={{ textAlign: "center" }}>Thank you</h3>
    </Card>
  );
};

export default QuizResults;
