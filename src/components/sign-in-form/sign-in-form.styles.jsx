import styled from "styled-components";

export const SignUpForm = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 380px;
  @media (max-width: 600px) {
    width: 230px;
  }
  h2 {
    margin: 10px 0;
  }
`;

export const ButtonsContaner = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
`;
