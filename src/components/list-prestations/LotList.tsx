import React from "react";

import { Tab, Tabs, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { StateType, LotState, Lot } from "../../redux/reducers/types";

import PrestationContainer from "./PrestationContainer";

function LotList() {
  const lots: LotState = useSelector((state: StateType) => state.lots);

  return (
    <>
      <h2>Détails par métiers des travaux :</h2>
      <Tabs id="uncontrolled-tab">
        {lots.map(({ label, lignes, prixTotalHT, prixTotalTTC }: Lot) => (
          <Tab key={label} title={label} eventKey={label}>
            <PrestationContainer lignes={lignes} label={label} />
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
    </>
  );
}

export default LotList;
