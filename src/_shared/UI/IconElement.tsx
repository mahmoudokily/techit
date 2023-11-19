import styled from "styled-components";

export default styled.div(
  ({ theme }) => `
    align-self: stretch;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink:none;
    transition: background ${theme.button.transition};
`
);
