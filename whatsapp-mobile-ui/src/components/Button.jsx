import '../styles/Button.css';
import urlIcon from '../images/url-icon.svg';
import callIcon from '../images/call-icon.svg';
import copyIcon from '../images/copycode-icon.svg';

export default function Button ({type, text, phone_number, url, example}) {

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

    return (
        <>
            {urlButton}
            {callButton} 
            {copyCodeButton} 
            {quickReply}  
        </>
    )
}