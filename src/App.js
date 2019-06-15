import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store/store";
import Main from './components/Main'

import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main/>
      </div>
    </Provider>
  );
}

export default App;
