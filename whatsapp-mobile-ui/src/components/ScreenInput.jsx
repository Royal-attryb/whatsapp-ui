import '../styles/ScreenInput.css';
import Message from '../images/android/Message.svg';
import Microphone from '../images/android/Microphone.svg';
import input from '../images/ios/Input.svg';

export default function ScreenInput ({os}) {
    return (
        <div className={`screen-input ${os}-screen-input`}>
            {(os === "android") ? <><img className="message-img" src={Message}></img>
            <img className="microphone-img" src={Microphone}></img></> :
            <img className='ios-input' src={input}></img>
            }
        </div>
    )
}