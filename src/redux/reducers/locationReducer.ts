import { LocationState, IndexLocation, Lot } from "./types";
import actionTypes from "../actionTypes";

const locationState: LocationState | {} = {};

function locationReducer(
  state: LocationState | {} = locationState,
  {
    type,
    payload
  }: { type: string; payload: { locations: IndexLocation; lots: Array<Lot> } }
) {
  switch (type) {
    case actionTypes.setLocation: {
      const prelist = payload.locations.map(salle =>
        payload.lots.flatMap(({ lignes }) =>
          lignes.map(ligne => {
            const result = ligne.locationsDetails.locations.map(
              location => location.uuid === salle.uuid
            );

            return result.length ? ligne : undefined;
          })
        )
      );

      const list = prelist.map(pre => pre.filter(p => p));

      return {
        index: payload.locations,
        list
      };
    }
    default:
      return state;
  }
}

export default locationReducer;
