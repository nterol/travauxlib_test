import { LocationState } from "./types";
import actionTypes from "../actionTypes";

const locationState: LocationState | [] = [];

function locationReducer(
  state: LocationState = locationState,
  { type, payload }: { type: string; payload: LocationState }
) {
  switch (type) {
    case actionTypes.setLocation: {
      return [...payload];
    }
    default:
      return state;
  }
}

export default locationReducer;
