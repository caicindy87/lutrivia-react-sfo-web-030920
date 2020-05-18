import React from "react";
import QuestionContainer from "./QuestionContainer";
import Form from "./Form";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Lutrivia</h1>
        <button>New Game</button>
        <span>Score: </span>
        <QuestionContainer />
        <Form />
      </div>
    );
  }
}

export default App;
