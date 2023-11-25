import styled from "styled-components";

export const SignUpFormContainer = styled.div`
  width: 380px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    width: 230px;
  }
  h2 {
    margin: 10px 0;
  }
`;
