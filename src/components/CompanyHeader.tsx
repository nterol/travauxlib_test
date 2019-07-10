import React from "react";

import { useSelector } from "react-redux";
import { StateType } from "../redux/reducers/types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 8px;
  flex-direction: row;
`;

function CompanyHeader() {
  const {
    name,
    email,
    logoUrl,
    address,
    phoneNumber,
    city,
    firstNameRepresentantLegal,
    lastNameRepresentantLegal
  } = useSelector((state: StateType) => state.company);

  return (
    <Container>
      <img width="100" height="100" src={logoUrl} alt="logo entreprise" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{phoneNumber}</p>
        <p>{`${address} ${city}`}</p>
        <p>
          <b>Représentant légal: </b>
          {`${firstNameRepresentantLegal} ${lastNameRepresentantLegal}`}
        </p>
      </div>
    </Container>
  );
}

export default CompanyHeader;
