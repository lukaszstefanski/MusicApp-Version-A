import React from 'react';

import './Button.scss';

const Button = ({ label, type, onClick }) => (
    <button
        type={type}
        onClick={onClick}
        className={type === 'submit' ? 'submitButton' : 'resetButton'}
    >
        {label}
    </button>
);

export default Button;
