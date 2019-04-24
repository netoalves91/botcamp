import React from "react";

import ChatWrapper from "../../components/ChatWrapper";

import LogoBotcamp from "../../components/LogoBotcamp";

import ChatLogout from "../../components/ChatLogout";


const Chat = () => (
  <ChatWrapper>
    <LogoBotcamp chat/>
    <ChatLogout/>
  </ChatWrapper>
)

export default Chat;
