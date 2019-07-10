import { CompanyState } from "./types";
import actionTypes from "../actionTypes";

const companyState: CompanyState | {} = {};

function companyReducer(
  state = companyState,
  { type, payload }: { type: string; payload: CompanyState }
): CompanyState | {} {
  switch (type) {
    case actionTypes.setCompany: {
      return { ...payload };
    }
    default:
      return state;
  }
}

export default companyReducer;
