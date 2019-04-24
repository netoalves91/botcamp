import logobotcamp from "../../images/botcamp.png";

import styled from "styled-components";

const LogoBotcamp = styled.img.attrs(props => ({
  src: logobotcamp,
  alt: 'Logo Botcamp'
}))`
  width: ${props => props.login ? "248px" : "200px"};
`;

export default LogoBotcamp;
