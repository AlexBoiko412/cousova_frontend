import scroll from "../../assets/scroll-down.png"

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
            className="scroll-down_button"
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
