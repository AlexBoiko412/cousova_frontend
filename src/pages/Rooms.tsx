import ScrollDownButton from "../components/UI/ScrollDownButton.tsx";
import Button from "../components/UI/Button.tsx";
import bookIco from "../assets/book-icon.png";

const Rooms = () => {
    return (
        <>
            <div className={"poster__background"}/>


            <section className={"poster"}>
                <div className={"flex flex-col justify-start w-full"}>
                    <h2 className={"text-lg leading-none"}>WELCOME TO</h2>

                    <h1 className={"font-logo text-7xl tracking-widest leading-none font-bold"}>LUXURY</h1>
                    <h3 className={"font-logo text-xl font-bold tracking-[0.5em] leading-3"}>HOTELS</h3>

                    <p className={"text-[0.8em] mt-5"}>
                        Book your stay and enjoy Luxury
                        redefined at the most affordable rates.
                    </p>
                </div>

                <div className={"flex flex-col items-center gap-6"}>
                    <Button className={"!py-2 !px-4 !text-[0.8em]"}>
                        <img className={"w-[14px]"} src={bookIco} alt={"book icon"}/>
                        BOOK NOW
                    </Button>

                    <ScrollDownButton label={"Rooms"}/>
                </div>

            </section>
        </>
    );
};

export default Rooms;