import React from "react";
import { Deal } from "../../redux/reducers/types";
import styled from "styled-components";

const Container = styled.div`
  padding: 32px;
`;

const Address = styled.div``;

const Customer = ({ customer }: { customer: Deal }) => (
  <Container>
    <div>
      <b>Nom de client: </b>
      {customer.customerName}
      <div>
        <b>Email: </b>
        {customer.customerEmail}
      </div>
      <Address>
        <b>Adresse : </b>
        <span>
          {customer.billingAddress.address} <br />
          {`${customer.billingAddress.postalCode} ${
            customer.billingAddress.city
          }`}
        </span>
      </Address>
    </div>
  </Container>
);

export default Customer;
