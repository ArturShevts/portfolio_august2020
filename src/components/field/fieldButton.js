import React from "react";
import { bool, func } from "prop-types";
import { StyledBurger } from "./styledFields";

const FieldBn = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
FieldBn.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
};
export default FieldBn;
