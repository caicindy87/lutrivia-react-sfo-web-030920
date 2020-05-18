import React, { Component } from "react";
import questions from "./data";
import Question from "./Question";

class QuestionContainer extends Component {
  state = {
    questionsArr: [],
  };

  // renderQuestions = () => {
  //   this.state.questions.map((question) => <Question question={question} />);
  // };

  fetchQuestions = () => {
    this.setState({
      questionsArr: questions.questions,
    });
  };

  componentDidMount() {
    this.fetchQuestions();
  }

  render() {
    console.log(this.state.questionsArr);
    return (
      <div>
        {this.state.questionsArr.map((question) => (
          <Question key={question.text} question={question} />
        ))}
      </div>
    );
  }
}

export default QuestionContainer;
