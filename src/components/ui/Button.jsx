import { forwardRef } from 'react';
import './Button.css';

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className = '',
  ...props
}, ref) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  const loadingClass = loading ? 'btn-loading' : '';
  const fullWidthClass = fullWidth ? 'btn-full' : '';
  
  return (
    <button
      ref={ref}
      className={`${baseClass} ${variantClass} ${sizeClass} ${loadingClass} ${fullWidthClass} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className="btn-spinner">
          <svg className="spinner-icon" viewBox="0 0 24 24">
            <circle className="spinner-circle" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
          </svg>
        </span>
      )}
      {icon && iconPosition === 'left' && !loading && (
        <span className="btn-icon btn-icon-left">{icon}</span>
      )}
      <span className="btn-text">{children}</span>
      {icon && iconPosition === 'right' && !loading && (
        <span className="btn-icon btn-icon-right">{icon}</span>
      )}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
