import React from "react";

class Form extends React.Component {
  state = {
    nameInput: "",
  };

  handleNameChange = (e) => {
    this.setState({
      nameInput: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            name="name"
            value={this.state.nameInput}
            onChange={(e) => this.handleNameChange(e)}
          ></input>
          <button>Submit Score</button>
        </form>
      </div>
    );
  }
}

export default Form;
