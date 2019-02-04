import React, { Component } from "react";
// import logo from "./logo.svg";
// import store from "../store";
import "../App.css";
import { fetchMovies } from "../reducers/movies";

class App extends Component {
  componentDidMount() {
    const movieThunk = fetchMovies();
    // store.dispatch(movieThunk);
  }

  render() {
    return (
      <div className="App">
        <main>
          <p>Movie Review Project</p>
        </main>
      </div>
    );
  }
}

export default App;
