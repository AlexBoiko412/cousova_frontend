import './Contact.css'
import Input from "../components/UI/Input.tsx";
import Textarea from "../components/UI/Textarea.tsx";
import Button from "../components/UI/Button.tsx";

const Contact = () => {
    return (
        <>
            <section
                className={"contact-title"}
            >
                CONTACT-US
            </section>
            <section className={"contact-content"}>
                <div className={"flex flex-col items-start py-[16vh]"}>
                    <h1 className="contact-subtitle">
                        WE ARE HERE FOR YOU
                    </h1>
                    <p className="contact-description">
                        At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests,
                        please forward it to our support desk and we will get back to you as soon as possible.
                    </p>
                </div>
                <div className={"contact-usage"}>
                    <div className={"contact-info"}>
                        497 Evergreen Rd. Roseville, <br/>
                        CA 95673<br/>
                        Phone: +44 345 678 903 <br/>
                        Email: luxury_hotels@gmail.com
                    </div>
                    <form className={"contact-form"}>
                        <label htmlFor={"name"}>
                            Name
                        </label>
                        <Input
                            name={"name"}
                            id="name"
                            type="text"
                        />

                        <label htmlFor={"email"}>
                            Email Address
                        </label>
                        <Input
                            name={"email"}
                            id="email"
                            type="email"
                        />

                        <label htmlFor={"message"}>
                            Message
                        </label>
                        <Textarea
                            name={"message"}
                            id="message"
                        />
                        <Button
                            type="submit"
                            className={"!py-4 !place-self-end"}
                        >
                            SUBMIT
                        </Button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;