import React, { forwardRef } from 'react';

import './Select.scss';

const Select = forwardRef(({ selectFieldOptions, onChange }, ref) => (
    <select ref={ref} onChange={onChange} className="select">
        {selectFieldOptions.map((option, index) => (
            <option key={index} value={option}>
                {option}
            </option>
        ))}
    </select>
));

export default Select;
