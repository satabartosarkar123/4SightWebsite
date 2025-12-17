import { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';
import './Select.css';

const Select = forwardRef(({
    label,
    error,
    helperText,
    options = [],
    placeholder = 'Select an option',
    fullWidth = true,
    className = '',
    ...props
}, ref) => {
    const inputId = props.id || props.name;

    return (
        <div className={`select-wrapper ${fullWidth ? 'select-full' : ''} ${className}`}>
            {label && (
                <label htmlFor={inputId} className="select-label">
                    {label}
                    {props.required && <span className="select-required">*</span>}
                </label>
            )}
            <div className="select-container">
                <select
                    ref={ref}
                    id={inputId}
                    className={`select ${error ? 'select-error' : ''}`}
                    {...props}
                >
                    <option value="" disabled>
                        {placeholder}
                    </option>
                    {options.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
                <ChevronDown className="select-icon" size={18} />
            </div>
            {(error || helperText) && (
                <span className={`select-helper ${error ? 'select-helper-error' : ''}`}>
                    {error || helperText}
                </span>
            )}
        </div>
    );
});

Select.displayName = 'Select';

export default Select;
