import '../styles/ScreenInput.css';
import Message from '../images/Message.svg';
import Microphone from '../images/Microphone.svg';

export default function ScreenInput () {
    return (
        <div className="screen-input">
            <img className="message-img" src={Message}></img>
            <img className="microphone-img" src={Microphone}></img>
        </div>
    )
}