import scroll from "../../assets/scroll-down.png"

const ScrollDownButton = () => {
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
            <img
                alt={"Scroll"}
                src={scroll}
            />
        </button>
    );
};

export default ScrollDownButton;
