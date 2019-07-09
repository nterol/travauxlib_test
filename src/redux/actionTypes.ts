/*
 I could type using : { [k: string]: string }
 but then I would miss that sweet autocompletion
*/

type ActionType = {
  getData: string;
  errorFetch: string;
  setLot: string;
  setDevisInfo: string;
  setCompany: string;
  setLocation: string;
  setPayment: string;
  dispatchDone: string;
};

const actionTypes: ActionType = {
  getData: "GET_DATA",
  errorFetch: "ERROR_FETCHING",
  dispatchDone: "DISPATCH_DONE",
  setLot: "SET_LOT",
  setDevisInfo: "SET_DEVIS_INFO",
  setCompany: "SET_COMPANY",
  setLocation: "SET_LOCATION",
  setPayment: "SET_PAYMENT"
};

export default actionTypes;
