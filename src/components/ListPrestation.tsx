import React, { useState } from "react";

import styled from "styled-components";
import { Card, Button, ButtonToolbar } from "react-bootstrap";
import LotList from "./LotList";
import LocationList from "./LocationList";

const Container = styled(Card)`
  padding: 32px;
  margin-bottom: 16px;
`;

const Toolbar = styled(ButtonToolbar)`
  justify-content: space-evenly;
`;

function ListPrestation() {
  const [perJob, setPerJob] = useState<boolean>(true);
  const [perRoom, setPerRoom] = useState<boolean>(false);

  const handleView = () => {
    setPerJob(!perJob);
    setPerRoom(!perRoom);
  };

  return (
    <Container>
      <Toolbar>
        <Button
          onClick={handleView}
          variant="primary"
          id="jobs"
          disabled={perJob}
        >
          Voir par métier
        </Button>
        <Button
          onClick={handleView}
          variant="success"
          id="rooms"
          disabled={perRoom}
        >
          Voir par salle
        </Button>
      </Toolbar>
      {perJob ? <LotList /> : undefined}
      {perRoom ? <LocationList /> : undefined}
    </Container>
  );
}

export default ListPrestation;
