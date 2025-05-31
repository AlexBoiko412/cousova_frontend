import ScrollDownButton from "../components/UI/ScrollDownButton.tsx";
import Button from "../components/UI/Button.tsx";
import bookIco from "../assets/book-icon.png"
import BenefitCard from "../components/BenefitCard.tsx";
import Testimonials from "../components/UI/Testimonials.tsx";
import "./Home.css"

// mock data
const testimonials = [
    {
        name: "Emily Johnson",
        comment: "The rooms were spotless and the view was stunning. Highly recommend this hotel!",
    },
    {
        name: "James Smith",
        comment: "Excellent service and beautiful surroundings. I’ll definitely come back again!",
    },
    {
        name: "Sophie Lee",
        comment: "A peaceful stay with great amenities. Everything was perfect!",
    },
];

const Home = () => {
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

            <section className={"home"}>
                <h2 className={"text-lg font-medium mb-8"}>All our room types are including complementary breakfast</h2>
                <BenefitCard
                    img={"https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    title={"Luxury redefined"}
                    description={"Our rooms are designed to transport " +
                        "you into an environment made for leisure. " +
                        "Take your mind off the day-to-day of home " +
                        "life and find a private paradise for yourself."}
                />
                <BenefitCard
                    img={"https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    title={"Leave your worries in the sand"}
                    description={"We love life at the beach. Being close " +
                        "to the ocean with access to endless sandy " +
                        "beach ensures a relaxed state of mind. It " +
                        "seems like time stands still watching the " +
                        "ocean. "}
                />

            </section>
            <section className={"testimonials"}>
                <Testimonials testimonials={testimonials}/>
            </section>

        </>
    );
};

export default Home;