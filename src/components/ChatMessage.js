import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <i class="fa-solid fa-user"></i>
      <span className="font-semibold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
