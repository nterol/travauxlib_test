import React, { useState } from "react";
import styled from "styled-components";

import { Dropdown } from "react-bootstrap";
import { LocationState, LocationReduced } from "../redux/reducers/types";

type Props = {
  index: LocationState;
  locations: Array<LocationReduced>;
  k: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Info = styled.div`
  margin: 8px 16px;
`;

function LocationDropdown({ index, locations, k }: Props) {
  const [select, setSelect] = useState(0);

  const names = locations.map(location => {
    const y = index.findIndex(i => i.uuid === location.uuid);
    return index[y].label;
  });

  return (
    <Container>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="location-dropdown">
          {names[select]}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {names.map((name: string, i) => {
            if (name !== undefined)
              return (
                <Dropdown.Item
                  onClick={() => setSelect(i)}
                  href={`#${i}`}
                  key={`${k}_${name}`}
                >
                  {name}
                </Dropdown.Item>
              );
            return undefined;
          })}
        </Dropdown.Menu>
      </Dropdown>
      <Info>
        <p>
          <b>Quantités:</b> {locations[select].quantite}
        </p>
      </Info>
    </Container>
  );
}

export default LocationDropdown;
