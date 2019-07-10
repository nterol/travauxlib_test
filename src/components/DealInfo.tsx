import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { DevisState, StateType } from "../redux/reducers/types";

const Container = styled(Card)`
  padding: 32px;
  margin-bottom: 32px;
`;

const Text = styled(Card.Text)`
  max-width: 600px;
`;

function DealInfo() {
  const devis: DevisState = useSelector((state: StateType) => state.devis);

  return (
    <Container>
      <Card.Title>{devis.title}</Card.Title>
      <Text>{devis.introductionLetter}</Text>
      <Card.Text>
        <b>{`Le ${devis.date}, valide ${devis.dureeValidite}`}</b>
      </Card.Text>
    </Container>
  );
}

export default DealInfo;
