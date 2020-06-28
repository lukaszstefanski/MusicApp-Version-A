import React, { forwardRef } from 'react';

import './Input.scss';

const Input = forwardRef(({ type, placeholder }, ref) => (
    <input type={type} placeholder={placeholder} ref={ref} className="input" />
));

export default Input;
