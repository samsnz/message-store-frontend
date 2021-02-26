import logo from "./logo.svg";
import "./App.css";
import CreateMessage from "./components/CreateMessage";
import Messages from "./components/Messages";
import { useState, useEffect } from "react";
import messageService from "./services/messageService";

const App = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = async (messageObject) => {
    try {
      const returnedMessage = await messageService.createMessage(messageObject);
      setMessages(messages.concat(returnedMessage));
    } catch (exception) {
      console.log("exception====", exception);
    }
  };

  const deleteMessage = async (id) => {
    try {
      await messageService.deleteMessage(id);
      setMessages(messages.filter((message) => message.id !== id));
    } catch (exception) {
      console.log("exception====", exception);
    }
  };

  useEffect(() => {
    messageService.getAllMessages().then((initialMessages) => {
      setMessages(initialMessages);
    });
  }, []);

  return (
    <div className="my-container">
      <CreateMessage createMessage={addMessage} />
      <Messages
        messages={messages}
        addMessage={addMessage}
        deleteMessage={deleteMessage}
      />
    </div>
  );
};

export default App;
