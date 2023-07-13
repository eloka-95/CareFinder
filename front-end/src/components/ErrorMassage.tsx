import React from 'react';
import './com.style1.css';


interface ErrorMassageProps {
  messages: string[]; // Array of error messages
}

const ErrorMassage: React.FC<ErrorMassageProps> = ({ messages }) => {
    // console.log('error massage', messages)
    
 

  if (!messages || messages.length === 0) {
    return null; // If messages is undefined or empty, don't render anything
  }
 

  return (
    <div className='error-messages'>
      {messages.map((message, index) => (
        <div key={index} className='error-message'>{message}</div>
      ))}
    </div>
  );
};

export default ErrorMassage;
