import { useState } from "react";
import classes from './RoomCard.module.css'
import {cn} from "../utils/cn.ts";
import Button from "./UI/Button.tsx";
import {Link} from "react-router-dom";

interface RoomCardProps {
    images: string[];
    name: string;
    description: string;
}

const RoomCard = ({ images, name, description }: RoomCardProps) => {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % images.length);
    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

    return (
        <div className={classes.roomCard}>
            <div className={cn(classes.carousel, "group")}>
                {images.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`Room image ${i + 1}`}
                        className={cn(
                            classes.carouselImage,
                            i === index ? "opacity-100" : "opacity-0"
                        )}
                    />
                ))}

                <button
                    onClick={prev}
                    className={classes.carouselButton__left}
                >
                    ‹
                </button>

                <button
                    onClick={next}
                    className={classes.carouselButton__right}
                >
                    ›
                </button>

                <div className={classes.carouselCounter}>
                    {images.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setIndex(i)}
                            className={cn(
                                classes.carouselCounter__dot,
                                i === index ? "bg-white" : "bg-white/0"
                            )}
                        />
                    ))}
                </div>
            </div>

            <div className="flex flex-col items-center">
                <h3 className="text-xl font-semibold text-light bg-primary w-full h-full text-center p-4">{name}</h3>
                <Link
                    to={`/rooms/${name}`}
                    className="text-primary font-medium p-4 flex items-center justify-between w-full cursor-pointer"
                >
                    <div className={"flex gap-2 items-center"}>
                        <Button
                            className={"text-2xl !rounded-full !p-2 leading-none h-8 w-8 text-center"}
                        >+</Button>
                        <span>Open Room Details</span>
                    </div>
                    <span>{description}</span>
                </Link>
            </div>
        </div>
    );
};

export default RoomCard;
