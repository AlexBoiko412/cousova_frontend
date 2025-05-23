import {useParams} from "react-router-dom";

const RoomDetails = () => {
    const { id } = useParams<{id: string}>();

    return (
        <div>
            Room: {id}
        </div>
    );
};

export default RoomDetails;