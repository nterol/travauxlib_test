import { CompanyState } from "./types";

const companyState: CompanyState | {} = {};

function companyReducer(
  state = companyState,
  { type, payload }: { type: string; payload: CompanyState }
): CompanyState | {} {
  switch (type) {
    case "SET_COMPANY": {
      return { payload };
    }
    default:
      return state;
  }
}

export default companyReducer;
