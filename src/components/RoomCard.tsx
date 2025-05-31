import { useState } from "react";
import classes from './RoomCard.module.css'
import {cn} from "../utils/cn.ts";

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
                <img
                    src={images[index]}
                    alt={`Room image ${index + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-300"
                />

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
                                "w-4 h-4 rounded-full cursor-pointer transition border-[1px]",
                                i === index ? "bg-white" : "bg-white/0"
                            )}
                        />
                    ))}
                </div>
            </div>

            <div className="p-4">
                <h3 className="text-xl font-semibold text-primary">{name}</h3>
                <p className="text-gray-600 mt-2">{description}</p>
            </div>
        </div>
    );
};

export default RoomCard;
