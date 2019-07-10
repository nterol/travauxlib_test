import React from "react";

import { animated, useSpring } from "react-spring";
import styled from "styled-components";

const SLoader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Loader = () => (
  <SLoader>
    <div>Loading...</div>
  </SLoader>
);

const Loading = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={props}>
      <Loader />
    </animated.div>
  );
};

export default Loading;
