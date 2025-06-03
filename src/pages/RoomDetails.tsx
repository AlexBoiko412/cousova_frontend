import Testimonials from "../components/UI/Testimonials.tsx";
import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../components/UI/Button";
import type {RoomType, Room} from '../types/types';
import "./RoomDetails.css"

// mock data
import testimonials from "./tesimonials.json";
import roomData from './roomtypes.json'
import {cn} from "../utils/cn.ts";

const RoomDetails = () => {

    const { id } = useParams<{ id: string }>();
    const [roomType, setRoomType] = useState<RoomType>();
    const [rooms, setRooms] = useState<Room[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedRoomId, setSelectedRoomId] = useState<number | null>(null);


    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % (roomType ? roomType.images.length : 0));
    const prev = () => setIndex((i) => (i - 1 + (roomType ? roomType.images.length : 0)) % (roomType ? roomType.images.length : 0));

    useEffect(() => {
        const fetchRoomDetails = async () => {
            // const res = await fetch(`http://localhost:3000/api/rooms/type/${id}`);
            const data = roomData;

            /// moCK await res.json();
            setRoomType(data.type);
            setRooms(data.rooms);
        };

        fetchRoomDetails();
    }, [id]);

    const handleBook = async () => {
        if (!selectedDate || !selectedRoomId) return alert("Select date and room");

        const res = await fetch("http://localhost:3000/api/bookings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                roomId: selectedRoomId,
                date: selectedDate.toISOString().split('T')[0]
            })
        });

        if (res.ok) {
            alert("Booked!");
            // refresh rooms
            const updated = await fetch(`http://localhost:3000/api/rooms/type/${id}`);
            const data = await updated.json();
            setRooms(data.rooms);
            setSelectedRoomId(null);
        }
    };

    // const getDisabledDates = (room: Room) => room.bookings.map((b: any) => new Date(b.date));

    return (
        <>
            <section className={"page-title"}>
                BOOKING
            </section>

            <div className="flex flex-col items-center">
                <h3 className="text-xl font-semibold text-light bg-primary w-full h-full text-center p-4">{roomType ? roomType.name : "Page doesnt Exist"}</h3>
                <span>{roomType && roomType.description}</span>
            </div>


            <section className="py-8">
                {roomType && (
                    <>
                        <h1 className="text-4xl font-bold mb-4">{roomType.name}</h1>
                        <p className="mb-8">{roomType.description}</p>

                        <div className="mb-6">
                            <h2 className="text-xl mb-2">Select a date</h2>
                            <DatePicker
                                selected={selectedDate}
                                onChange={date => setSelectedDate(date)}
                                dateFormat="yyyy-MM-dd"
                                minDate={new Date()}
                            />
                        </div>

                        {selectedDate && (
                            <div>
                                <h2 className="text-xl mb-2">Available rooms on {selectedDate.toDateString()}</h2>
                                <div className="flex gap-4 flex-wrap">
                                    {rooms.filter(room => {
                                        const bookedDates = room.bookings.map((b: any) => b.date);
                                        return !bookedDates.includes(selectedDate.toISOString().split('T')[0]);
                                    }).map(room => (
                                        <div
                                            key={room.id}
                                            onClick={() => setSelectedRoomId(room.id)}
                                            className={`border p-4 rounded cursor-pointer ${
                                                selectedRoomId === room.id ? "border-blue-500" : ""
                                            }`}
                                        >
                                            Room #{room.number}
                                        </div>
                                    ))}
                                    {rooms.filter(room => {
                                        const bookedDates = room.bookings.map((b: any) => b.date);
                                        return bookedDates.includes(selectedDate.toISOString().split('T')[0]);
                                    }).length === rooms.length && <p>All rooms booked on this date.</p>}
                                </div>
                            </div>
                        )}

                        <div className="mt-8">
                            <Button onClick={handleBook}>Book Now</Button>
                        </div>
                    </>
                )}
            </section>

            <section className="relative w-full">
                <div className={"carousel"}>
                    {roomType && roomType.images.map((src: string, i: number) => (
                        <img
                            key={i}
                            src={src}
                            alt={`Room image ${i + 1}`}
                            className={cn(
                                "carousel-image",
                                i === index ? "opacity-100" : "opacity-0"
                            )}
                        />
                    ))}

                    <button
                        onClick={prev}
                        className={"carousel-button__left"}
                    >
                        ‹
                    </button>

                    <button
                        onClick={next}
                        className={"carousel-button__right"}
                    >
                        ›
                    </button>

                    <div className={"carousel-counter"}>
                        {roomType && roomType.images.map((_: string, i: number) => (
                            <div
                                key={i}
                                onClick={() => setIndex(i)}
                                className={cn(
                                    "carousel-counter__dot",
                                    i === index ? "bg-white" : "bg-white/0"
                                )}
                            />
                        ))}
                    </div>
                </div>
            </section>


            <section className={"testimonials"}>
                <Testimonials testimonials={testimonials}/>
            </section>
        </>
    );
};

export default RoomDetails;