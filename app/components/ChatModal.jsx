'use client'

import { useState } from 'react';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ChatModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Welcome! Try asking: "How can you help me?"',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);

  // Toggle chat modal visibility
  const toggleModal = () => {
    setIsOpen(prev => !prev);
  };

  // Update input as user types
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Handle message submission
  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Append user message
    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    const userInput = input;
    setInput('');
    setLoading(true);
    setTyping(true);

    try {
      // API call to /api/chat
      const { data } = await axios.post('/api/chat', {
        message: userInput,
        threadId: 1,
      });
      setMessages(prev => [
        ...prev,
        { sender: 'bot', text: data.response },
      ]);
    } catch (error) {
      // Fallback for error case
      console.error('Error fetching chat response:', error);
      setMessages(prev => [
        ...prev,
        {
          sender: 'bot',
          text: 'Sorry, something went wrong. Please try again later.',
        },
      ]);
    } finally {
      setLoading(false);
      setTyping(false);
    }
  };

  return (
    <div>
      {/* Toggle Button at Bottom Left */}
      <button
        onClick={toggleModal}
        className="fixed bottom-5 left-5 bg-red-500 text-white p-4 rounded-full shadow-lg animate-bounce hover:animate-none focus:outline-none"
      >
        <i className="fa fa-comments text-2xl"></i>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-20 left-5 w-80 md:w-96 lg:w-1/3 bg-blue-600 text-white rounded-lg shadow-xl overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-blue-400">
            <h3 className="text-xl font-bold">Chat with AI</h3>
            <p className="text-sm">
              Type your query or try: "How can you help me?"
            </p>
          </div>

          {/* Message List */}
          <div className="p-4 h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  msg.sender === 'bot' ? 'text-left' : 'text-right'
                }`}
              >
                <div
                  className={`inline-block p-2 rounded ${
                    msg.sender === 'bot' ? 'bg-blue-500' : 'bg-red-500'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-1"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-1"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            )}
          </div>

          {/* Input Section */}
          <div className="p-4 border-t border-blue-400">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendMessage();
                }}
                placeholder="Type your message..."
                className="flex-1 p-2 rounded-l bg-white text-black focus:outline-none"
              />
              <button
                onClick={handleSendMessage}
                disabled={loading}
                className={`px-4 rounded-r ${
                  loading ? 'bg-gray-500' : 'bg-red-500'
                } text-white font-bold`}
              >
                {loading ? (
                  <span className="animate-spin">
                    <i className="fa fa-spinner"></i>
                  </span>
                ) : (
                  <i className="fa fa-paper-plane"></i>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatModal;
