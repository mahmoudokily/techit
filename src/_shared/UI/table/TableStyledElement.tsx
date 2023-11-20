import styled from "styled-components";

export const LoadingMoreLayer = styled.div`
  pointer-events: none;
  background: ${({ theme }) => theme.colors.primary};
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  border-radius: 3px;
  display: flex;
  align-items: center;
`;

export const LoadingLayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 0;
  width: 100%;
  height: 100%;
`;

export const Empty = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LoadingMoreText = styled.span`
  color: #fff;
  margin-right: 5px;
`;
