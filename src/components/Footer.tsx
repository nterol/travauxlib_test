import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { StateType } from "../redux/reducers/types";

const Container = styled.footer`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #3265bc;
  color: white;
  padding: 32px;
`;

function Footer() {
  const company = useSelector((state: StateType) => state.company);
  return (
    <Container>
      <p>{`
  ${company.statutEntreprise} ${company.name} au capital de ${company.capital} €
   SIRET ${company.formattedSiret} ${company.address}  ${company.city} ${
        company.postalCode
      } `}</p>
    </Container>
  );
}

export default Footer;
