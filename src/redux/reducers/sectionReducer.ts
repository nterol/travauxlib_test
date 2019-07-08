import { SectionType, Section, Prestation } from "./types";

const sectionState: SectionType = [];

function sectionReducer(
  state: SectionType = sectionState,
  { type, payload }: { type: string; payload: SectionType }
) {
  switch (type) {
    case "SET_SECTIONS": {
      const other = payload.flatMap(lot =>
        lot.lignes.filter(ligne => !ligne.locationsDetails.quantityIsByLocation)
      );

      return [...payload, { label: "Autres", lignes: other }];
    }
    default:
      return state;
  }
}

export default sectionReducer;
