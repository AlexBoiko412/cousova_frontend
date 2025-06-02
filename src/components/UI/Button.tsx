import classes from './Button.module.css'
import type {ButtonHTMLAttributes} from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const Button = ({children, className, ...props}: IButtonProps) => {
    return (
        <button
            className={`${classes.button} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;