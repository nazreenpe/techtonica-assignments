import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(prop) {
    super(prop);
    this.state = { message: '' };
  }

  handleMessageChange = (event) => {
    this.setState(
      { message: event.target.value }
    )
  }

  render() {
    const message = this.state.message;

    return (
      <div>
        <h1>Tweeter!</h1>

        <label for="entryform">Entry Form</label>
        <form name="entryform" id="entry-form">
          <select id="usernames" name="usernames">
            <option value="gabby">Gabby</option>
            <option value="gabby">Ariel</option>
            <option value="gabby">Fathima</option>
            <option value="gabby">Ali</option>
            <option value="gabby">Robyn</option>
          </select>
          <br/>
          <br/>
          <textarea value={message} onChange={this.handleMessageChange}></textarea>
          <br/>
          <input type="submit" value="Submit"></input>
        </form>

      </div>
    );
  }

}

export default App;
