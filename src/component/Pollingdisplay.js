import React from 'react';
class Pollingdisplay extends React.Component {
    handleSubmit = (event) => {
      event.preventDefault()
      console.log(event.target[0].value)
      console.log(event.target.elements.username.value)
      console.log(event.target.username.value)
      console.log(this.inputNode.value)
    }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
          What is your favorite programming language?
          <br></br>
            <input type="radio" value="JavaScript" name="option" /> JavaScript
            <input type="radio" value="Python" name="option" /> Python
            <input type="radio" value="Java" name="option" /> Java
            <input type="radio" value="C#" name="option" /> C#
            <br></br>
            </label>
          <button type="submit">Submit</button>
        </form>
        
      )
    }
  }

  export default Pollingdisplay;