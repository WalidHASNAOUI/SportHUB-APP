import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const message = await Message.create(req.body);
    res.status(201).json(message);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getMessagesBetweenUsers = async (req, res) => {
  const { senderId, recipientId } = req.params;

  try {
    // Find messages between the two users (sender and recipient)
    const messages = await Message.find({
      $or: [
        { sender: senderId, recipient: recipientId },
        { sender: recipientId, recipient: senderId }
      ]
    }).sort({ createdAt: 1 }); // Sort by creation date (oldest first)

    if (!messages.length) {
      return res.status(404).json({ message: 'No messages found between these users' });
    }

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
