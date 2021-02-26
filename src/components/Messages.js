import React from "react";
import Message from "./Message";
import icon_search from "../assets/icon_search.svg";

const Messages = ({ messages, deleteMessage }) => {
  return (
    <div className="messages-container">
      <div className="search-input-container">
        <input type="text" className="search-input" />
        <img src={icon_search} className="search-input-image" />
      </div>

      <div className="display-phone phone-title-style">
        From | To | Subject | Body | Date
      </div>
      <table>
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Subject</th>
            <th>Body</th>
            <th>Date</th>
            <th className="display-web"> </th>
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
