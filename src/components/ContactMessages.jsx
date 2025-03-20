import { useState, useEffect } from "react";
import { db, collection, getDocs } from "../utils/firebaseConfig";

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "contacts"));
        const messagesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(messagesData);
      } catch (error) {
        console.error("Error fetching messages: ", error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="p-6 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-4">Contact Messages</h2>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id} className="border-b border-gray-700 p-3">
            <p>
              <strong>Name:</strong> {msg.name}
            </p>
            <p>
              <strong>Email:</strong> {msg.email}
            </p>
            <p>
              <strong>Message:</strong> {msg.message}
            </p>
            <p>
              <strong>Time:</strong> {msg.timestamp?.toDate().toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactMessages;
