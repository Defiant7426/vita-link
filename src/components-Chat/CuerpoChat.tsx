import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function CuerpoChat() {
  const [messages, setMessages] = useState([
    { sender: 'Asistente IA', text: 'Hola, ¿en qué puedo ayudarte a reservar una cita médica?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const sendMessage = async () => {
    if (inputValue.trim() === '') return; // No enviar mensajes vacíos

    // Agregar el mensaje del usuario al estado
    const newMessages = [...messages, { sender: 'Paciente', text: inputValue }];
    setMessages(newMessages);
    setInputValue('');

    try {
      // Enviar el historial de mensajes al servidor backend
      const response = await axios.post('http://localhost:3001/api/chat', { messages: newMessages.map(msg => ({ role: msg.sender === 'Paciente' ? 'user' : 'assistant', content: msg.text })) });

      const gptResponse = response.data.response;

      // Agregar la respuesta de GPT al estado
      setMessages([...newMessages, { sender: 'Asistente IA', text: gptResponse }]);
    } catch (error) {
      console.error('Error al obtener la respuesta de GPT:', error);
      setMessages([...newMessages, { sender: 'Asistente IA', text: 'Lo siento, ha ocurrido un error. Por favor, intenta de nuevo.' }]);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="max-w-4xl mx-auto py-4 px-6 flex flex-col" style={{ height: 'calc(100vh - 12rem)' }}>
      <div className="flex-1 overflow-y-auto border rounded-lg p-4 bg-gray-50">
        {messages.map((msg, index) => (
          <div key={index} className="mb-4">
            <div className={`text-sm ${msg.sender === 'Paciente' ? 'text-gray-700' : 'text-blue-500'}`}>
              {msg.sender}: {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="mt-4 flex items-center border-t pt-4">
        <input
          type="text"
          className="flex-1 border rounded-l-lg p-2 outline-none"
          placeholder="Escribe tu mensaje..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-vita-link text-white text-sm font-bold px-4 py-2 rounded-r-lg hover:bg-vita-link-dark"
          onClick={sendMessage}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}