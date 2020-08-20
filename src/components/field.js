import React, { useState } from "react";
import styled from "styled-components";

const Field = ({ children }) => {
  const background = "#FF7F4F";
  const font = "white";

  const [margin, setMargin] = useState("-100vw");

  const setStyle = (margin) => {
    setMargin(margin);
  };

  const TriangleLeft = styled.span`
    display: block;
    float: right;
    border-top: 50vh solid transparent;
    border-bottom: 50vh solid transparent;
    border-left: 50vw solid ${background};
    height: 0;
    color: ${font};
  `;
  const Box = styled.span`
    display: block;
    width: 150vw;
    margin-top: 0;
    height: 0;

    margin-left: ${margin};

    transition: all 0.8s 0.2s ease-in-out;
  `;
  const Wrapper = styled.span`
    display: block;
    float: left;
    background-color: ${background};
    height: 100vh;
    width: 100vw;
    margin-top: 0;
    color: ${font};
  `;

  const Closer = styled.span`
    display: float;
    margin-top: 50%;
    margin-left: -50vw;
  `;

  return (
    <Box>
      <Wrapper>
        {children}
        <p>page contents</p>
        <button onMouseEnter={() => setStyle("-100vw")}>Change</button>
      </Wrapper>

      <TriangleLeft>
        <Closer>
          <button onMouseEnter={() => setStyle("0")}>Change</button>
        </Closer>
      </TriangleLeft>
    </Box>
  );
};

export default Field;
