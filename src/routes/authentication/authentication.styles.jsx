import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 30px 0;
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;
