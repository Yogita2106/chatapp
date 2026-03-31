const Message = require("../models/Message");

exports.getMessages = async (req, res) => {
  try {
    // Frontend se 'sender' aur 'receiver' query params mein aa rahe hain
    const { sender, receiver } = req.query; 

    if (!sender || !receiver) {
      return res.status(400).json({ message: "Sender and Receiver IDs are required" });
    }

    const messages = await Message.find({
      $or: [
        { sender: sender, receiver: receiver },
        { sender: receiver, receiver: sender },
      ],
    }).sort({ createdAt: 1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching messages" });
  }
};