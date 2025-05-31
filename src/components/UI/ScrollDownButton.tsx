import scroll from "../../assets/scroll-down.png"
import classes from "./ScrollDownButton.module.css"

interface IScrollDownButtonProps {
    label: string
}

const ScrollDownButton = ({label}: IScrollDownButtonProps) => {
    const handleScroll = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={handleScroll}
            className={classes.scrollDownButton}
        >
            <span>{label}</span>
            <img
                alt={"Scroll"}
                src={scroll}
            />
        </button>
    );
};

export default ScrollDownButton;
