interface IButtonProps {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const Button = ({children, className, ...props}: IButtonProps) => {
    return (
        <button
            className={`button ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;