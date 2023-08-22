import React, { Component } from "react";
import { Provider } from "react-redux";
import Section from "./components/Section";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Section />
      </Provider>
    );
  }
}

export default App;
