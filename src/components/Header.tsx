import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { StateType } from "../redux/reducers/types";
import CompanyHeader from "./CompanyHeader";
import Customer from "./Customer";

const HeaderContainer = styled(Card)`
  padding: 24px;
  background: #fff;
  margin-bottom: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.h2`
  color: white;
  margin-bottom: 32px;
`;

function Header() {
  const devis = useSelector((state: StateType) => state.devis);

  return (
    <>
      <Title>{`Devis #${devis.token}`}</Title>
      <HeaderContainer>
        <CompanyHeader />
        <Customer customer={devis.deal} />
      </HeaderContainer>
    </>
  );
}

export default Header;
