import ScrollDownButton from "../components/UI/ScrollDownButton.tsx";
import Button from "../components/UI/Button.tsx";
import bookIco from "../assets/book-icon.png";
import './Rooms.css'
import Testimonials from "../components/UI/Testimonials.tsx";
import testimonials from "./tesimonials.json";
import RoomCard from "../components/RoomCard.tsx";

const Rooms = () => {
    return (
        <>
            <div className={"poster__background"}/>


            <section className={"poster"}>
                <div className={"flex flex-col justify-start w-full"}>
                    <h2 className={"text-lg leading-none"}>WELCOME TO</h2>

                    <h1 className={"font-logo text-9xl tracking-widest leading-none font-bold"}>LUXURY</h1>
                    <h3 className={"font-logo text-xl font-bold tracking-[0.5em] leading-3"}>HOTELS</h3>

                    <p className={"text-body mt-5"}>
                        Book your stay and enjoy Luxury
                        redefined at the most affordable rates.
                    </p>
                </div>

                <div className={"flex flex-col items-center gap-6"}>
                    <Button className={"!py-2 !px-4 !text-body"}>
                        <img className={"w-[20px]"} src={bookIco} alt={"book icon"}/>
                        BOOK NOW
                    </Button>

                    <ScrollDownButton label={""} />
                </div>
            </section>

            <section className={"rooms"}>
                <div>
                    <h1 className={"page-content__title"}>ROOMS AND RATES</h1>
                    <p className={"page-content__description"}>Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes,
                        comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented
                        by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces. </p>
                </div>
                <RoomCard
                    description={""}
                    images={[
                        "https://images.unsplash.com/photo-1635274605638-d44babc08a4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1635274605638-d44babc08a4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1635274605638-d44babc08a4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1635274605638-d44babc08a4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    ]}
                    name={"SINGLE ROOM"}
                />

                <RoomCard
                    description={""}
                    images={[
                        "https://images.unsplash.com/photo-1635274605638-d44babc08a4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1635274605638-d44babc08a4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1635274605638-d44babc08a4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1635274605638-d44babc08a4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    ]}
                    name={"DOUBLE ROOM"}
                />
            </section>

            <section className={"testimonials"}>
                <Testimonials testimonials={testimonials}/>
            </section>
        </>
    );
};

export default Rooms;