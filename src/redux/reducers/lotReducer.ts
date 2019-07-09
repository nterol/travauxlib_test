import { LotState } from "./types";
import actionTypes from "../actionTypes";

const lotState: LotState | [] = [];

function lotsReducer(
  state: LotState = lotState,
  { type, payload }: { type: string; payload: LotState }
): LotState | [] {
  switch (type) {
    case actionTypes.setLot: {
      console.log(payload);
      const other = payload.flatMap(lot => {
        return lot.lignes.filter(ligne => {
          return !ligne.locationsDetails.quantityIsByLocation;
        });
      });
      return [...payload, { label: "Autres", lignes: [...other] }];
    }
    default:
      return state;
  }
}

export default lotsReducer;
