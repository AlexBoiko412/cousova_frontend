
import classes from './EmailSubscribeInput.module.css'
const EmailSubscribeInput = () => {
    return (

        <div className="relative">
            <input
                type="email"
                className={classes.emailInput}
                placeholder={'Enter your email'}
            />
            <span className={classes.emailInputButton}>
                OK
            </span>
        </div>
    );
};

export default EmailSubscribeInput;