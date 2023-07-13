import React from 'react';
import './com.style1.css';



interface SuccessMassageProps {
    message: string;
}

const SuccessMessage: React.FC<SuccessMassageProps> = ({ message }) => {
    return (
        <div className="success-message">
            {message}
        </div>
    )
}

export default SuccessMessage

