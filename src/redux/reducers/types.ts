export type CompanyState = {};

export type LocationReduced = {
  uuid: string;
  quantité: number;
};

export type Prestation = {
  designation: string;
  description: string;
  prixUnitaireHT: number;
  quantite: number;
  unite: string;
  prixHT: number;
  tauxTVA: number;
  montantTVA: number;
  prixTTC: number;
  locationsDetails: {
    locations: Array<LocationReduced | undefined>;
    additionalQuantity: number;
    quantityIsByLocation: boolean;
  };
};

export type Section = {
  label: string;
  lignes: Array<Prestation>;
};
export type SectionType = Array<Section>;

export type Location = {
  uuid: string;
  label: string;
  surface: number;
};
export type LocationsType = Array<Location>;
