import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import actionTypes from "../redux/actionTypes";
import { StateType } from "../redux/reducers/types";

function Main() {
  const dispatch = useDispatch();
  const query = useSelector((state: StateType) => state.query);
  useEffect(() => {
    dispatch({ type: actionTypes.getData });
  }, [dispatch]);

  return <div>{}</div>;
}

export default Main;
