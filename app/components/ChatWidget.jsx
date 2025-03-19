"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const starterMessages = [
    {
      text: "Welcome to YSSR Assistant! Here are quick questions you might ask:\n\n",
      isBot: true,
      quickQuestions: [
        "What courses do you offer?",
        "How to enroll in driving classes?",
        "What are your operating hours?",
        "Can I reschedule my lesson?"
      ]
    }
  ];

  const sendMessage = async () => {
    if (!newMessage.trim()) return;

    const userMessage = { text: newMessage, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post('/api/chat', {
        message: newMessage,
        threadId: 1
      });

      if (response.data.success) {
        setIsTyping(true);
        setTimeout(() => {
          setMessages(prev => [...prev, { 
            text: response.data.response, 
            isBot: true 
          }]);
          setIsTyping(false);
        }, 1500);
      } else {
        setError('Failed to get response from server');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isMounted) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-red-500 text-white p-5 rounded-full shadow-lg hover:bg-red-600 
        transition-all duration-300 ${!isOpen ? 'animate-bounce' : ''}`}
      >
        <i className="fas fa-robot text-3xl" />
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[28rem] max-w-[95vw] bg-blue-900 rounded-lg shadow-xl 
        overflow-hidden transform transition-all duration-300 max-h-[80vh] flex flex-col">
          {/* Header */}
          <div className="bg-red-500 p-4 flex items-center justify-between">
            <h2 className="text-white text-xl font-bold">YSSR Assistant</h2>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-blue-200 text-xl"
            >
              <i className="fas fa-times" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {/* Starter Messages */}
            {messages.length === 0 && starterMessages.map((msg, i) => (
              <div key={i} className="space-y-3">
                <div className="bg-blue-800 text-white p-4 rounded-xl prose prose-invert max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {msg.text}
                  </ReactMarkdown>
                  <div className="mt-3 grid grid-cols-1 gap-3">
                    {msg.quickQuestions?.map((q, qi) => (
                      <button
                        key={qi}
                        onClick={() => setNewMessage(q)}
                        className="text-left p-3 bg-blue-700 rounded-lg hover:bg-blue-600 
                        transition-colors text-base"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Chat Messages */}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`max-w-[85%] p-4 rounded-xl ${
                  msg.isBot ? 'bg-blue-800' : 'bg-red-500'
                } text-white prose prose-invert max-w-none`}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {msg.text}
                  </ReactMarkdown>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center space-x-3 text-white">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 bg-white rounded-full animate-bounce" />
                  <div className="w-2.5 h-2.5 bg-white rounded-full animate-bounce delay-100" />
                  <div className="w-2.5 h-2.5 bg-white rounded-full animate-bounce delay-200" />
                </div>
                <span className="text-base">AI is typing...</span>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="text-red-300 text-base p-3 bg-blue-950 rounded-lg">
                <i className="fas fa-exclamation-triangle mr-2" />
                {error}
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-blue-950">
            <div className="flex space-x-3">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 bg-blue-800 text-white rounded-xl p-3 
                focus:outline-none focus:ring-2 focus:ring-red-500 text-base"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading}
                className="bg-red-500 text-white p-3 rounded-xl w-12 flex items-center 
                justify-center hover:bg-red-600 disabled:opacity-50 text-lg"
              >
                {isLoading ? (
                  <i className="fas fa-spinner animate-spin" />
                ) : (
                  <i className="fas fa-paper-plane" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;