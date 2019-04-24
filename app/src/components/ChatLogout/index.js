import chatlogout from "../../images/logout.png";

import styled from "styled-components"

const ChatLogout = styled.img.attrs(props => ({
  src: chatlogout,
  alt: 'Chat Logout'
}))`
  width: 30px,
  height: 30px,
  object-fit: contain
`

export default ChatLogout
