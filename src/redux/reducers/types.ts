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

export type Lot = {
  label: string;
  lignes: Array<Prestation>;
  prixTotalHT?: number;
  prixTotalTTC?: number;
};

export type LotState = Array<Lot>;

export type Location = {
  uuid: string;
  label: string;
  surface: number;
};
export type LocationState = Array<Location | undefined>;

export type DevisState = {
  title: string;
  introductionLetter: string;
  insurances: Array<{ file: string }>;
  date: string;
  dureeValidite: string;
};

type PaymentMethod = {
  pourcentage: number;
  lable: string;
  montant: number;
};

type PaymentMethodType = Array<PaymentMethod>;

export interface PaymentState extends PaymentMethodType {
  prixTotalHTAvantRemise: number;
  remise: { typeRemise: string };
  montantRemise: number;
  prixTotalHT: number;
  prixTotalTTC: number;
  montantTVA: Array<{ taux: number; base: number; montant: number }>;
}

export interface QueryState {
  loading: boolean;
  done: boolean;
  error: boolean;
}

export interface StateType {
  company: CompanyState;
  devis: DevisState;
  lots: LotState;
  location: LocationState;
  payment: PaymentState;
  query: QueryState;
}
