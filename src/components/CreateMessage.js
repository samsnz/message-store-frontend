import React, { useState } from "react";

const CreateMessage = ({ createMessage }) => {
  const [newMessage, setNewMessage] = useState({
    messageFrom: "",
    messageTo: "",
    subject: "",
    body: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;

    setNewMessage({
      ...newMessage,
      [event.target.name]: value,
    });
  };

  const addMessage = (event) => {
    event.preventDefault();
    console.log("Here");
    createMessage(newMessage);

    setNewMessage({
      messageFrom: "",
      messageTo: "",
      subject: "",
      body: "",
    });
  };

  return (
    <div>
      <form onSubmit={addMessage}>
        <label>From</label>
        <br />
        <input
          value={newMessage.messageFrom}
          name="messageFrom"
          onChange={handleChange}
          type="text"
        />
        <br />

        <label>To</label>
        <br />
        <input
          value={newMessage.messageTo}
          name="messageTo"
          onChange={handleChange}
          type="text"
        />
        <br />

        <label>Subject</label>
        <br />
        <input
          value={newMessage.subject}
          name="subject"
          onChange={handleChange}
          type="text"
        />
        <br />

        <label>Body</label>
        <br />
        <textarea value={newMessage.body} name="body" onChange={handleChange} />
        <br />

        <button type="submit">Create message</button>
        <br />
      </form>
    </div>
  );
};

export default CreateMessage;
