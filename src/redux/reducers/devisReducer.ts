import { DevisState } from "./types";
import actionTypes from "../actionTypes";

const devisState: DevisState | {} = {};

function devisReducer(
  state: DevisState | {} = devisState,
  { type, payload }: { type: string; payload: DevisState }
): DevisState | {} {
  switch (type) {
    case actionTypes.setDevisInfo: {
      return { ...payload };
    }
    default:
      return state;
  }
}

export default devisReducer;
