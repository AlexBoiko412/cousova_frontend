import classes from './FacilityCard.module.css'

interface IFaciltyCardProps {
    img: string;
    title: string;
}

const FacilityCard = ({img, title}: IFaciltyCardProps) => {
    return (
        <div
            className={classes.facilityCard}
            style={{
                backgroundImage: `url(${img})`,
            }}
        >
            <div className={classes.facilityCard__title}>
                {title}
            </div>
        </div>
    );
};

export default FacilityCard;