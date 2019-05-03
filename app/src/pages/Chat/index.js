import React from "react";

import HeaderWrapper from "../../components/HeaderWrapper";

import LogoBotcamp from "../../components/LogoBotcamp";

import ChatLogout from "../../components/ChatLogout";


const Chat = () => (
  <HeaderWrapper>
    <LogoBotcamp chat/>
    <ChatLogout/>
  </HeaderWrapper>
)

export default Chat;
