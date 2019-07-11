import React from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { Prestation, LocationState } from "../redux/reducers/types";

import LocationDropdown from "./LocationList";

const Container = styled.div`
  padding: 32px;
  height: 400px;
  overflow: scroll;
  border: 1px solid #eae2e2;
  margin: 24px 0 32px 0;
`;

const Inside = styled.div`
  border-bottom: 1px solid;
  padding: 18px;
`;

type Props = {
  lignes: Array<Prestation>;
  label: string;
  locationIndex: LocationState;
};

const PrestationContainer = ({ lignes, label, locationIndex }: Props) => (
  <Container>
    {lignes.map((ligne, i) => {
      if (label !== "Autres" && !ligne.locationsDetails.quantityIsByLocation)
        return undefined;
      return (
        <Inside key={`${label}_${i}`}>
          <p>
            <b>{ligne.designation}</b>
          </p>
          <p>{ligne.description}</p>
          <Table>
            <thead>
              <tr>
                <th>Quantité</th>
                <th>prix unitaire hors taxes</th>
                <th>prix hors taxes</th>
                <th>Montant de la TVA</th>
                <th>prix TTC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{ligne.quantite}</td>
                <td>{ligne.prixUnitaireHT}</td>
                <td>{ligne.prixTTC}</td>
                <td>{ligne.montantTVA}</td>
                <td>{ligne.prixTTC}</td>
              </tr>
            </tbody>
          </Table>
        </Inside>
      );
    })}
  </Container>
);

export default PrestationContainer;
