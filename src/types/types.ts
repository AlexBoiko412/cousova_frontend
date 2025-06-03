export interface RoomType {
    id: number;
    name: string;
    description: string;
    images: string[];
}

export interface Room {
    id: number;
    number: string;
    roomTypeId: number;
    bookings: Booking[];
}

export interface Booking {
    id: number;
    roomId: number;
    checkIn: string;
    checkOut: string;
}


export interface RoomTypesResponse extends RoomType {
    rooms: Room[];
}