import classes from "./BenefitCard.module.css"
import Button from "./UI/Button.tsx";

interface IBenefitCardProps {
    title: string;
    description: string;
    img: string;
}

const BenefitCard = ({
        title,
        description,
        img
     }: IBenefitCardProps) => {


    return (
        <div className={classes.benefitCard}>
            <div className={"flex flex-col gap-2 items-start justify-center"}>
                <h1 className={"text-4xl font-logo font-bold"}>{title}</h1>
                <p className={"font-medium text-body"}>
                    {description}
                </p>

                <Button  className={"!mt-3"}>
                    EXPLORE
                </Button>
            </div>

            <div
                className={classes.benefitCard__showcase}
                style={{
                    backgroundImage: `url(${img})`,
                }}
            >

            </div>
        </div>
    );
};

export default BenefitCard;