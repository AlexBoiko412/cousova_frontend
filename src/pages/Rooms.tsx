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

                    <ScrollDownButton label={"Rooms"} />
                </div>
            </section>

            <section className={"rooms"}>
                <div>
                    <h1 className={"page-content__title"}>ROOMS AND RATES</h1>
                    <p className={"page-content__description"}>Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes,
                        comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented
                        by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces. </p>
                </div>

                <div className={"rooms__list"}>
                    <RoomCard
                        description={"1 single bed"}
                        images={[
                            "https://www.tlcinteriors.com.au/wp-content/uploads/2021/09/little-girls-bedroom-with-rattan-headboard-and-bohemian-styling.jpeg",
                            "https://vantageonthepark.com/wp-content/uploads/1A-ADA-1-bed-1-bath-690.jpg",
                            "https://www.sandals.com/blog/content/images/2021/07/Oceanview-Room.jpg",
                            "https://www.craftedbeds.co.uk/cdn/shop/articles/image3.jpg?v=1674490756"
                        ]}
                        name={"SINGLE ROOM"}
                    />

                    <RoomCard
                        description={"1 double bed"}
                        images={[
                            "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            "https://fpg.roomsketcher.com/image/topic/1/image/1-Bedroom-3D-House-Plan.jpg",
                            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/338259705.jpg?k=e57717d8753caec581e5bd7837a3dd27bd3931786a2f597157c798d58bbaf5cd&o=&hp=1",
                            "https://plus.unsplash.com/premium_photo-1661877303180-19a028c21048?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
                        ]}
                        name={"DOUBLE ROOM"}
                    />

                    <RoomCard
                        description={"2 rooms, 2 single beds"}
                        images={[
                            "https://images.unsplash.com/photo-1722606489463-292d64516526?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGmkx2Umg4LvSkn2y12K_ClQgk6W_F02SzhA&s",
                            "https://media.gettyimages.com/id/1990444472/de/foto/gem%C3%BCtliches-wohnzimmer-im-skandinavischen-stil.jpg?s=612x612&w=gi&k=20&c=ofAJQ6ptuFfQU1BILpz7FEjS1QfblbMch608lDsVVFM=",
                            "https://images.desenio.com/zoom/19162_2-22261.jpg"
                        ]}
                        name={"TWO ROOMS"}
                    />

                    <RoomCard
                        description={"1 double bed, 2 single beds"}
                        images={[
                            "https://www.amsterdamidaparthotel.com/upload/heading/family-apartment-1600x750.jpg",
                            "https://media.designcafe.com/wp-content/uploads/2023/07/05141656/aesthetic-room-wall-decor.jpg",
                            "https://www.marthastewart.com/thmb/lxfu2-95SWCS0jwciHs1mkbsGUM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/modern-living-rooms-wb-1-bc45b0dc70e541f0ba40364ae6bd8421.jpg",
                            "https://www.vanorohotel.com/wp-content/uploads/2021/07/drz-vanoro_6737.jpg"
                        ]}
                        name={"FAMILY ROOMS"}
                    />
                </div>

            </section>

            <section className={"testimonials"}>
                <Testimonials testimonials={testimonials}/>
            </section>
        </>
    );
};

export default Rooms;