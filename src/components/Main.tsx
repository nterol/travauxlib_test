import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import actionTypes from "../redux/actionTypes";
import { StateType } from "../redux/reducers/types";
import Loading from "./Loading";
import Devis from "./Devis";

function Main() {
  const dispatch = useDispatch();
  const { loading, done, error } = useSelector(
    (state: StateType) => state.query
  );
  useEffect(() => {
    dispatch({ type: actionTypes.getData });
  }, [dispatch]);

  if (loading && !done) return <Loading />;
  if (error && done) return <div>Error</div>;
  if (done) return <Devis />;
  return <Loading />;
}

export default Main;
