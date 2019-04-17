import logobotcamp from "../../images/botcamp.svg";

import styled from "styled-components";

const LogoBotcamp = styled.img.attrs(props => ({
  src: logobotcamp,
  alt: 'Logo Botcamp'
}))`
  width: 248px;
`;

export default LogoBotcamp;
