import styled from "styled-components";

export const LoadingLayer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.9);
  margin: 0;
  width: 100%;
  height: 100%;
  // z-index:1000000;
`;
