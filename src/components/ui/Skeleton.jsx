import './Skeleton.css';

const Skeleton = ({
    variant = 'rectangular',
    width,
    height,
    className = '',
    ...props
}) => {
    const variantClass = `skeleton-${variant}`;

    return (
        <div
            className={`skeleton ${variantClass} ${className}`}
            style={{
                width: width,
                height: height,
            }}
            {...props}
        />
    );
};

// Predefined skeleton components for common use cases
Skeleton.Text = ({ lines = 3, className = '' }) => (
    <div className={`skeleton-text-wrapper ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
            <Skeleton
                key={index}
                variant="text"
                width={index === lines - 1 ? '70%' : '100%'}
            />
        ))}
    </div>
);

Skeleton.Avatar = ({ size = 48, className = '' }) => (
    <Skeleton
        variant="circular"
        width={size}
        height={size}
        className={className}
    />
);

Skeleton.Card = ({ className = '' }) => (
    <div className={`skeleton-card ${className}`}>
        <Skeleton variant="rectangular" height={200} />
        <div className="skeleton-card-content">
            <Skeleton variant="text" width="60%" />
            <Skeleton.Text lines={2} />
        </div>
    </div>
);

export default Skeleton;
