import './Card.css';

const Card = ({
    children,
    variant = 'default',
    hover = true,
    glow = false,
    padding = 'md',
    className = '',
    onClick,
    ...props
}) => {
    const baseClass = 'card';
    const variantClass = `card-${variant}`;
    const hoverClass = hover ? 'card-hover' : '';
    const glowClass = glow ? 'card-glow' : '';
    const paddingClass = `card-padding-${padding}`;
    const clickableClass = onClick ? 'card-clickable' : '';

    return (
        <div
            className={`${baseClass} ${variantClass} ${hoverClass} ${glowClass} ${paddingClass} ${clickableClass} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
