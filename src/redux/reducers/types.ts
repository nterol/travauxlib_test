export type CompanyState = {
  name: string;
  email: string;
  logoUrl: string;
  siret: string;
  formattedSiret: string;
  numeroTVA: string;
  statutEntreprise: string;
  websites: {};
  address: string;
  city: string;
  capital: number;
  insurances: Array<{ file: string }>;
  corpsEtat: [];
  isRGE: boolean;
  isQualibat: boolean;
  isEcoArtisan: boolean;
  isKycCompliant: boolean;
  isArchitect: boolean;
  lemonWayWalletId: number;
  firstNameRepresentantLegal: string;
  lastNameRepresentantLegal: string;
  isAutoEntrepreneur: boolean;
  phoneNumber: string;
  postalCode: string;
};

export type LocationReduced = {
  uuid: string;
  quantite: number;
};

export type LotLocation = {
  locations: Array<LocationReduced>;
  additionalQuantity: number;
  quantityIsByLocation: boolean;
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
  locationsDetails: LotLocation;
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
export type LocationState = Array<Location>;

export type Deal = {
  isTravauxLib: boolean;
  customerName: string;
  customerEmail: string;
  billingAddress: {
    address: string;
    postalCode: string;
    city: string;
  };
};

export type DevisState = {
  token: string;
  deal: Deal;
  title: string;
  introductionLetter: string;
  date: string;
  dureeValidite: string;
};

type PaymentMethod = {
  pourcentage: number;
  label: string;
  montant: number;
};

export type PaymentMethodType = Array<PaymentMethod>;

export interface PaymentState {
  modalitesPaiement: PaymentMethodType;
  prixTotalHTAvantRemise: number;
  remise: { typeRemise: string };
  montantRemise: number;
  prixTotalHT: number;
  prixTotalTTC: number;
  montantsTVA: Array<{ taux: number; base: number; montant: number }>;
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
