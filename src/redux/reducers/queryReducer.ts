import actionTypes from "../actionTypes";
import { QueryState } from "./types";

const queryState = {
  loading: false,
  done: false,
  error: false
};

function queryReducer(
  state: QueryState = queryState,
  { type }: { type: string }
) {
  switch (type) {
    case actionTypes.getData: {
      return { ...state, loading: true };
    }
    case actionTypes.errorFetch: {
      return {
        loading: false,
        error: true,
        done: true
      };
    }
    case actionTypes.dispatchDone: {
      return { loading: false, done: true, error: false };
    }
    default:
      return state;
  }
}

export default queryReducer;
