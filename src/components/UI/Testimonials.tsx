import arrow from "../../assets/arrow-left.png";
import { useState } from "react";
import Button from "./Button.tsx";
import { AnimatePresence, motion } from "framer-motion";

type Testimonial = {
    name: string;
    comment: string;
};

interface ITestimonialProps {
    testimonials: Testimonial[];
}

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 200 : -200,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction > 0 ? -200 : 200,
        opacity: 0,
    }),
};

const Testimonials = ({ testimonials }: ITestimonialProps) => {
    const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

    const paginate = (newDirection: number) => {
        setIndex(([i]) => {
            const nextIndex = (i + newDirection + testimonials.length) % testimonials.length;
            return [nextIndex, newDirection];
        });
    };

    const { name, comment } = testimonials[index];

    return (
        <div className="w-full max-w-2xl mx-auto py-14 text-center px-4">
            <h2 className="text-3xl text-primary font-bold font-logo mb-4">
                What Our Guests Say
            </h2>

            <div className="flex flex-col justify-between bg-white p-6 relative min-h-[150px] overflow-hidden rounded-xl shadow-md">
                <div>
                    <AnimatePresence custom={direction} mode="wait">
                        <motion.div
                            key={index}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4 }}
                            className="absolute top-0 left-0 w-full px-4"
                        >
                            <p className="text-lg text-primary font-medium">"{comment}"</p>
                            <p className="font-medium text-dark mt-2">{name}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>


                <div className="mt-2 flex justify-center gap-2 relative z-10">
                    <Button onClick={() => paginate(-1)} className="!px-2">
                        <img width={14} src={arrow} alt="left" />
                    </Button>
                    <Button onClick={() => paginate(1)} className="!px-2">
                        <img width={14} src={arrow} alt="right" className="rotate-180" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
