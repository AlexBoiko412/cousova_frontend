import {useParams} from "react-router-dom";

const RoomDetails = () => {
    const { id } = useParams<{id: string}>();

    return (
        <>
            <div className={"poster__background"}/>
            Room: {id}
        </>
    );
};

export default RoomDetails;