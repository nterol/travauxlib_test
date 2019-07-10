import React from "react";
import { useSelector } from "react-redux";
import { StateType, PaymentState } from "../redux/reducers/types";
import { Card } from "react-bootstrap";
import Timeline from "./Timeline";

import styled from "styled-components";

const Container = styled(Card)`
  padding: 32px;
  margin-bottom: 16px;
`;

function PaymentList() {
  const payment: PaymentState = useSelector(
    (state: StateType) => state.payment
  );

  return (
    <Container>
      <h2>Facture: </h2>
      <p>
        <b>Prix hors taxe : </b>
        {payment.prixTotalHT} €
      </p>
      <p>
        <b>Prix total avant remise: </b>
        {payment.prixTotalHTAvantRemise} €
      </p>
      <p>
        <b>Remise: </b>
        {payment.montantRemise}
      </p>
      <p>
        <b>Montant de la TVA: </b>
        {payment.montantsTVA[0].montant} €
      </p>
      <h3>
        <b>Prix TTC: </b>
        {payment.prixTotalTTC}€
      </h3>
      <Timeline />
    </Container>
  );
}

export default PaymentList;
