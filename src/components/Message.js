import React from "react";
import getFormattedDate from "../utils/dateFormatter";

const Message = ({ message, deleteMessage }) => {
  return (
    <tr>
      <td className="first-column">
        <span className="bold-phone">{message.messageFrom}</span>
        <span className="display-phone">{getFormattedDate(message.date)}</span>
      </td>
      <td>{message.messageTo}</td>

      <td className="first-column">
        <span>{message.subject}</span>
        <span
          className="display-phone edit-todo-icon"
          onClick={() => deleteMessage(message.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </span>
      </td>

      <td>{message.body}</td>

      <td className="display-web">{getFormattedDate(message.date)}</td>
      <td className="display-web">
        <span
          className="edit-todo-icon"
          onClick={() => deleteMessage(message.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </span>
      </td>
    </tr>
  );
};

export default Message;
