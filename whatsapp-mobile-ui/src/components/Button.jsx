import '../styles/Button.css';
import urlIcon from '../images/url-icon.svg';
import callIcon from '../images/call-icon.svg';

export default function Button () {

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
     
    return (
        <>
            {urlButton}
            {callButton}
        </>
    )
}