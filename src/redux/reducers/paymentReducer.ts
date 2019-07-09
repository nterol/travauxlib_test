import { PaymentState } from "./types";
import actionTypes from "../actionTypes";

const paymentState: PaymentState | {} = {};

function paymentReducers(
  state: PaymentState | {} = paymentState,
  { type, payload }: { type: string; payload: PaymentState | {} }
): PaymentState | {} {
  switch (type) {
    case actionTypes.setPayment:
      return { ...payload };
    default:
      return state;
  }
}

export default paymentReducers;
