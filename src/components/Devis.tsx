import React from "react";
import { Container } from "./styles";

import Header from "./Header";
import Insurances from "./Insurances";
import LotList from "./LotList";
import Footer from "./Footer";
import PaymentList from "./PaymentList";
import DealInfo from "./DealInfo";

const Devis = () => (
  <Container>
    <Header />
    <DealInfo />
    <LotList />
    <PaymentList />
    <Insurances />
    <Footer />
  </Container>
);

export default Devis;
