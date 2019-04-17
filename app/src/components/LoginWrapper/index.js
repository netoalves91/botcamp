import styled from "styled-components";

import background from "../../images/ecossistema-background.png"

const LoginWrapper = styled.main`
  background: url(${background});
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export default LoginWrapper;
