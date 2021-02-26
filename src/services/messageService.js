import axios from "axios";

const url = "http://localhost:8080/api/messages";

const getAllMessages = async () => {
  const response = await axios.get(url);
  return response.data;
};

const createMessage = async (newMessage) => {
  console.log("Reach here");
  const response = await axios.post(url, newMessage);

  return response.data;
};

const deleteMessage = async (id) => {
  await axios.delete(`${url}/${id}`);
};

const messageService = {
  getAllMessages,
  createMessage,
  deleteMessage,
};

export default messageService;
