import React from "react";
import { Container } from "./styles";

import Header from "./header/Header";
import Insurances from "./Insurances";
import Footer from "./Footer";
import PaymentList from "./payment-list/PaymentList";
import DealInfo from "./DealInfo";
import ListPrestation from "./list-prestations/ListPrestation";

const Devis = () => (
  <Container>
    <Header />
    <DealInfo />
    <ListPrestation />
    <PaymentList />
    <Insurances />
    <Footer />
  </Container>
);

export default Devis;
