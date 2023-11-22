import styled from "styled-components";

export default styled.div(
  ({ theme }) => `
    align-self: stretch;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background ${theme.src.button.transition};
`
);
