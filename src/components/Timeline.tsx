import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { linearGradient } from "polished";

import splitGradient from "./utils/splitGradient";
import { StateType } from "../redux/reducers/types";

const Row = styled.div`
  padding: 16px;
  margin-top: 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const GradientLine = styled.div`
  margin: 8px;
  max-width: 250px;
  padding: 1rem;
  color: black;
  border-top-width: 3px;
  border-top-style: solid;
`;

const GradientRound = styled.div`
  border-radius: 30px;
  width: 20px;
  height: 20px;
  background: ${(props: { gradient: Array<string> }) =>
    linearGradient({
      colorStops: [props.gradient[1], props.gradient[0]],
      toDirection: "to left",
      fallback: "#FFF"
    })};
`;

const Mod = styled.div`
  font-size: 14px;
  font-weight: bold;

  span {
    color: ${(props: { g: string }) => props.g};
  }
`;

function Timeline() {
  const [gradientList, setGradient] = useState<Array<Array<string>>>([]);
  const modalite = useSelector(
    (state: StateType) => state.payment.modalitesPaiement
  );
  useEffect(() => {
    setGradient(
      splitGradient("rgb(0, 0, 70)", "rgb(28, 181, 224)", modalite.length + 6)
    );
  }, [modalite]);

  let y: number = 0;

  return (
    <Row>
      {gradientList.map((gradient, i) => {
        const round = i % 2 === 0;

        if (!round) y = y + 1;
        return round ? (
          <GradientRound key={`round-${i}`} gradient={gradient} />
        ) : (
          <GradientLine
            style={{
              borderImage: `linear-gradient(to left, ${gradient[1]}, 
            ${gradient[0]} ) 1`
            }}
            key={i}
          >
            <Mod g={gradient[1]}>
              {modalite[i - y].label} :{" "}
              <span>{modalite[i - y].pourcentage}%</span>
            </Mod>
            <p>
              <b>{modalite[i - y].montant}</b> €
            </p>
          </GradientLine>
        );
      })}
    </Row>
  );
}

export default Timeline;
