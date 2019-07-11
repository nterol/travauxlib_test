import React from "react";
import { Container } from "./styles";

import Header from "./Header";
import Insurances from "./Insurances";
import LotList from "./LotList";
import Footer from "./Footer";
import PaymentList from "./PaymentList";
import DealInfo from "./DealInfo";
import PrestationContainer from "./PrestationContainer";
import ListPrestation from "./ListPrestation";

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
