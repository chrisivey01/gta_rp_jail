import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store/store";
import { obtainData } from './store/reducersAndActions'
import Main from './components/Main'
const store = configureStore();

function App() {
  // store.dispatch(obtainData());

  return (
    <Provider store={store}>
      <div className="App">
        <Main/>
      </div>
    </Provider>
  );
}

export default App;
