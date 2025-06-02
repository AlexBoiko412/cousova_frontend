import './Contact.css'

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
                <div className={"contact-content"}>
                    <div className={"contact-info"}>

                    </div>
                    <form className={"contact-form"}>

                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;