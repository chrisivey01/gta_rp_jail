import { combineReducers } from "redux";
import axios from 'axios';

//REDUCER
// Set up reducer and switch
const reducer = (
  state = {
    result: [],
  },
  action
) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        result: action.payload
      };
    default:
      return state;
  }
};

// ACTIONS
// combined action and reducer files to easily develop little projects like this one
const obtainData = data => dispatch => {
  dispatch({
    
    type: "GET_DATA",
    payload: data
    
  });
};


const axiosData = () => {
  return dispatch => {
    return axios
      .get('http://localhost:8002/all_arrests')
      .then(response => {
        dispatch(obtainData(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export { obtainData, axiosData };


export default combineReducers({
  reducer
});
