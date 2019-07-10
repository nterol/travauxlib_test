import React from "react";

import { Tab, Tabs, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  StateType,
  LotState,
  Lot,
  LocationState
} from "../redux/reducers/types";
import styled from "styled-components";
import PrestationContainer from "./PrestationContainer";

const Container = styled(Card)`
  padding: 32px;
  margin-bottom: 16px;
`;

function LotList() {
  const lots: LotState = useSelector((state: StateType) => state.lots);
  const locationIndex: LocationState = useSelector(
    (state: StateType) => state.location
  );

  return (
    <Container>
      <h2>Détails des travaux :</h2>
      <Tabs id="uncontrolled-tab">
        {lots.map(({ label, lignes, prixTotalHT, prixTotalTTC }: Lot) => (
          <Tab key={label} title={label} eventKey={label}>
            <PrestationContainer
              locationIndex={locationIndex}
              lignes={lignes}
              label={label}
            />
            <Card>
              {
                <>
                  <h3>
                    <b>Prix total hors taxes: </b>
                    {prixTotalHT}
                  </h3>
                  <br />
                  <h3>
                    <b>Prix total : </b>
                    {prixTotalTTC}
                  </h3>
                </>
              }
            </Card>
          </Tab>
        ))}
      </Tabs>
    </Container>
  );
}

export default LotList;
