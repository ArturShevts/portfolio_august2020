import React, { useState } from "react";
import { Triangle } from "react-shapes";
import { Box, Wrapper, TriangleWrap, Opener } from "./styledFields";

const Field = ({ children, dir, color }) => {
  const [open, setOpen] = useState("-100");
  const [idx, setIdx] = useState("100");

  const setStyle = (open, idx) => {
    setOpen(open);
    setIdx(idx);
  };

  return (
    <Box margin={open} idx={idx} className={`${dir}`}>
      <Wrapper margin={open} color={color} idx={idx} className={`${dir}`}>
        {children}
        <p>page contents</p>
        <button onClick={() => setStyle("-100", "100")}>Change</button>
      </Wrapper>

      <TriangleWrap idx={idx} color={color} className={`${dir}`}>
        <Opener idx={idx} className={`${dir}`}>
          <button onClick={() => setStyle("0", "1000")}>Change</button>
        </Opener>
      </TriangleWrap>
    </Box>
  );
};

export default Field;
