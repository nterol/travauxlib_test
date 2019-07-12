import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { Dropdown } from "react-bootstrap";
import { LocationState, StateType } from "../../redux/reducers/types";
import PrestationContainer from "./PrestationContainer";

const Container = styled.div`
  margin: 32px 0;
  padding: 32px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;

  span {
    margin: 8px 16px;
  }
`;

function LocationList() {
  const { index, list }: LocationState = useSelector(
    (state: StateType) => state.location
  );

  const [select, setSelect] = useState(0);

  return (
    <>
      <h2>Détails par salle des travaux :</h2>
      <Container>
        <Dropdown>
          <Header>
            <Dropdown.Toggle variant="success" id="location-dropdown">
              {index[select].label}
            </Dropdown.Toggle>{" "}
            <span>{index[select].surface} m2</span>
          </Header>
          <Dropdown.Menu>
            {index.map(({ label }, i) => (
              <Dropdown.Item
                onClick={() => setSelect(i)}
                href={`#${i}`}
                key={label}
              >
                {label}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <PrestationContainer
          lignes={list[select]}
          label="room"
          uuid={index[select].uuid}
        />
      </Container>
    </>
  );
}

export default LocationList;
