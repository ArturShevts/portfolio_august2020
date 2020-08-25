import styled from "styled-components";

export const TriangleWrap = styled.span`
  

  &.left {
    height: 100vh;
    display: block;
    float: right;
    width: 10vw;
     
  &.right {
    height: 0;
    display: block;
    float: left;
    width: 10vw;
  }
  &.top {
     
    display: block;
    flex-direction: top;
  }
  &.bottom {
  }
  transition: all 0.8s 0.2s ease-in-out;
`;

export const Box = styled.span`
position: relative
  z-index: ${(props) => props.idx};
  &.left {
    margin-top: 0;
    display: flex;
    height: 0;
    width: 110vw;
    margin-left: ${(props) => props.margin}vw;
  }
  &.right {
    margin-top: 0;
    display: flex;
    flex-direction: row-reverse;
    float: right;
    height: 0;
    width: 110vw;
    margin-right: ${(props) => props.margin}vw;
  }
  &.top {
    display: block;
    min-height: 110vh;
    margin-top: ${(props) => props.margin}vh;
  }
  &.bottom {
    height: 110vh;
    width: 0;
    margin-bottom: ${(props) => props.margin}vh;
  }

  transition: all 0.8s 0.2s ease-in-out;
`;
export const Wrapper = styled.span`
  background-color: ${(props) => props.color};
  height: 100vh;
  width: 100vw;

  margin: 0;

  p,
  button {
    margin: 0;
    padding: 100px;
  }
  &.left {
    display: block;
    float: left;
  }
  &.right {
    display: block;
    float: right;
  }
  &.top {
    margin: 0;
    display: block;
    float: top;
  }
  &.bottom {
    float: top;
  }
  transition: all 0.8s 0.2s ease-in-out;
`;

export const Opener = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  display: float;

  &.left {
    height: 100vh;
    width: 10vw;
  }
  &.right {
    height: 100vh;
    width: 10vw;
  }
  &.top {
    height: 10vh;
    width: 100vw;
  }
  &.bottom {
    height: 10vh;
    width: 100vw;
  }
`;
