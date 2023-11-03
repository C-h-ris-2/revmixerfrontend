import React, { Component } from "react";
import MainPage from "./components/mainpage";
import AddNewSong from "./components/addnewsong";
import "./mainpage.css";

class  App extends Component {
  render() {
      return (
          <div className="App">
            <h1 className="title">RevMixer</h1>
            <MainPage />
            <AddNewSong/>
          </div>
      );
  }
}

export default App;
