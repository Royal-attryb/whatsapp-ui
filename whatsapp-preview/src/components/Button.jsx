import '../styles/Button.css';
import urlIcon from '../images/url-icon.svg';
import callIcon from '../images/call-icon.svg';
import copyIcon from '../images/copycode-icon.svg';

export default function Button ({button}) {
    // console.log(button);
    const urlButton = (
        <div className='button-wrapper'>
            <a href="#">
                <img className='icon' src={urlIcon}></img>
                <span>Click here</span>
            </a>
        </div>
    );
    
    const callButton = (
        <div className='button-wrapper'>
            <a href="#">
                <img className='icon' src={callIcon}></img>
                <span>Contact Us</span>
            </a>
        </div>
    );
    
    const quickReply = (
        <div className='button-wrapper'>
            <a href="#">
                {/* <img className='icon' src={callIcon}></img> */}
                <span>Send it!</span>
            </a>
        </div>
    );

    const copyCodeButton = (
        <div className='button-wrapper'>
            <a href="#">
                <img className='icon' src={copyIcon}></img>
                <span>Copy code</span>
            </a>
        </div>
    );

    const displayButtons = () => {
        if (button.type === 'COPY_CODE')
            return copyCodeButton;

        else if (button.type === 'QUICK_REPLY')
            return quickReply;

        else if (button.type === 'PHONE_NUMBER')
            return callButton;

        else
            return urlButton;
    }

    return (
        <>
            {displayButtons()}
        </>
    )
}