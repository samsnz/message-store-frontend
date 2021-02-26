import React from "react";
import Message from "./Message";

const Messages = ({ messages, deleteMessage }) => {
  return (
    <div>
      Messages
      <table>
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Subject</th>
            <th>Body</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {messages.map((message) => (
            <Message
              key={message.id}
              message={message}
              deleteMessage={deleteMessage}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Messages;
