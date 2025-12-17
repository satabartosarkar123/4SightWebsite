import { forwardRef } from 'react';
import './Input.css';

const Input = forwardRef(({
    label,
    error,
    helperText,
    type = 'text',
    fullWidth = true,
    className = '',
    ...props
}, ref) => {
    const inputId = props.id || props.name;

    return (
        <div className={`input-wrapper ${fullWidth ? 'input-full' : ''} ${className}`}>
            {label && (
                <label htmlFor={inputId} className="input-label">
                    {label}
                    {props.required && <span className="input-required">*</span>}
                </label>
            )}
            <input
                ref={ref}
                id={inputId}
                type={type}
                className={`input ${error ? 'input-error' : ''}`}
                {...props}
            />
            {(error || helperText) && (
                <span className={`input-helper ${error ? 'input-helper-error' : ''}`}>
                    {error || helperText}
                </span>
            )}
        </div>
    );
});

Input.displayName = 'Input';

export default Input;
