import React from "react";
import { Accordion, Card } from "react-bootstrap";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { StateType } from "../redux/reducers/types";

const Container = styled(Card)`
  margin-bottom: 32px;
`;

function Insurances() {
  const insurances = useSelector(
    (state: StateType) => state.company.insurances
  );

  return (
    <Container>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h2>
              Consulter nos assurances{" "}
              <span role="img" aria-label="cliquez ici!">
                🔽
              </span>
            </h2>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {insurances.map((insurance, i) => (
                <Card
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "24px"
                  }}
                  key={`insurance_${i}`}
                >
                  <embed
                    width="400"
                    height="500"
                    style={{ background: "grey", marginBottom: "16px" }}
                    src={insurance.file}
                  />
                  <a href={insurance.file}> Lire le pdf</a>
                </Card>
              ))}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
}

export default Insurances;
