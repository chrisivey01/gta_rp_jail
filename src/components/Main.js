import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { axiosData } from "../store/reducersAndActions";
import Display from "./Display";

const Main = () => {
  const { result } = useSelector(state => ({
    ...state.reducer
  }));
  const dispatch = useDispatch();
  const getData = useCallback(() => dispatch(axiosData()), [dispatch]);

  const [lastArrested, setLastArrested] = useState([]);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    setLastArrested(result.slice(-1).pop());
  }, [result]);

  return (
    <div>
      {lastArrested ? (
        <div className="recent-arrest">
          Last Arrested: {lastArrested.player_name}{" "}
        </div>
      ) : null}
      <Display result={result} />
    </div>
  );
};

export default Main;
