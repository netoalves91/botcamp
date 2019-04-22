import styled from "styled-components";

import background from "../../images/ecossistema-background.png"

const LoginWrapper = styled.main`
  background: url(${background});
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding-top: 120px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export default LoginWrapper;
