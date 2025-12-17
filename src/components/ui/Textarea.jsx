import { forwardRef } from 'react';
import './Textarea.css';

const Textarea = forwardRef(({
    label,
    error,
    helperText,
    fullWidth = true,
    rows = 4,
    className = '',
    ...props
}, ref) => {
    const inputId = props.id || props.name;

    return (
        <div className={`textarea-wrapper ${fullWidth ? 'textarea-full' : ''} ${className}`}>
            {label && (
                <label htmlFor={inputId} className="textarea-label">
                    {label}
                    {props.required && <span className="textarea-required">*</span>}
                </label>
            )}
            <textarea
                ref={ref}
                id={inputId}
                rows={rows}
                className={`textarea ${error ? 'textarea-error' : ''}`}
                {...props}
            />
            {(error || helperText) && (
                <span className={`textarea-helper ${error ? 'textarea-helper-error' : ''}`}>
                    {error || helperText}
                </span>
            )}
        </div>
    );
});

Textarea.displayName = 'Textarea';

export default Textarea;
