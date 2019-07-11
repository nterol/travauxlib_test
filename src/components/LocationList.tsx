import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { Dropdown } from "react-bootstrap";
import { LocationState, StateType } from "../redux/reducers/types";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Info = styled.div`
  margin: 8px 16px;
`;

function LocationList() {
  const { index, list }: LocationState = useSelector(
    (state: StateType) => state.location
  );

  const [select, setSelect] = useState(0);

  return (
    <Container>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="location-dropdown">
          {index[select].label}
        </Dropdown.Toggle>

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
      <>
        {list[select].map(e => (
          <Info>
            <p>
              <b>Quantités:</b>{" "}
              {
                e.locationsDetails.locations.find(
                  l => l.uuid === index[select].uuid
                ).quantite
              }
            </p>
          </Info>
        ))}
      </>
    </Container>
  );
}

export default LocationList;
