import classes from "./Input.module.css"
import type {InputHTMLAttributes} from "react";
import {cn} from "../../utils/cn.ts";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string;
}

const Input = ({className, ...props}: IInputProps) => {
    return (
        <input
            className={cn(classes.input, className)}
            {...props}
        />
    );
};

export default Input;