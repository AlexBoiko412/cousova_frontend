import ScrollDownButton from "../components/UI/ScrollDownButton.tsx";
import Button from "../components/UI/Button.tsx";
import bookIco from "../assets/book-icon.png";
import './About.css'
import FacilityCard from "../components/FacilityCard.tsx";

// mock data
import testimonials from "./tesimonials.json";
import Testimonials from "../components/UI/Testimonials.tsx";

const About = () => {

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

            <section className={"facilities"}>
                <div>
                    <h1 className={"page-content__title"}>Facilities</h1>
                    <p className={"page-content__description"}>We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so
                        that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure
                        and our modern luxury resort facilities will help you enjoy the best of all. </p>
                </div>

                <FacilityCard
                    img={"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    title={"THE GYM"}
                />
                <FacilityCard
                    img={"https://images.unsplash.com/photo-1714254567463-26966f6ba4ba?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    title={"POOL SIDE"}
                />

                <FacilityCard
                    img={"https://images.unsplash.com/photo-1733253870394-d7feafd52891?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    title={"POOLSIDE BAR"}
                />

                <FacilityCard
                    img={"https://plus.unsplash.com/premium_photo-1683134297492-cce5fc6dae31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    title={"THE SPA"}
                />
                <FacilityCard
                    img={"https://img.fischer.cz/hotels/720/turecko/egejska-riviera-kusadasi/ozdere/karya-family-resort/manin-restaurant-buffet.jpg"}
                    title={"RESTAURANT"}
                />
                <FacilityCard
                    img={"https://images.unsplash.com/photo-1604335398980-ededcadcc37d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    title={"LAUNDRY"}
                />
            </section>

            <section className={"testimonials"}>
                <Testimonials testimonials={testimonials}/>
            </section>
        </>
    );
};

export default About;