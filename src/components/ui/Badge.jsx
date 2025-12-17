import './Badge.css';

const Badge = ({
    children,
    variant = 'default',
    size = 'md',
    className = '',
    ...props
}) => {
    const baseClass = 'badge';
    const variantClass = `badge-${variant}`;
    const sizeClass = `badge-${size}`;

    return (
        <span
            className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}
            {...props}
        >
            {children}
        </span>
    );
};

export default Badge;
