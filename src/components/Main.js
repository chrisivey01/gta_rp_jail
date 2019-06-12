import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch, useStore } from "react-redux";
import { axiosData } from "../store/reducersAndActions";

const Main = () => {
  const { result } = useSelector(state => ({
    ...state.reducer
  }));
  const dispatch = useDispatch();
  const getData = useCallback(() => dispatch(axiosData()), [dispatch]);

  const [data, setData] = useState([]);
  useEffect(()=>{
      getData();
  },[getData])
  return (
      <div>
          <ul>
          {result ? result.map((player, i) =>{
              return <li key={i}>{player.player_name} {player.reason} {player.arresting_officer} {player.timestamp}</li>
          }) : null
        }
       </ul>
     </div>
  );
};

export default Main;