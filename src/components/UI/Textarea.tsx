import classes from "./Textarea.module.css"
import type {TextareaHTMLAttributes} from "react";
import {cn} from "../../utils/cn.ts";

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    className?: string;
}

const Textarea = ({className, ...props}: ITextareaProps) => {
    return (
        <textarea
            className={cn(classes.textarea, className)}
            {...props}
        />
    );
};

export default Textarea;