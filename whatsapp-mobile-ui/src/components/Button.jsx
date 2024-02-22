import '../styles/Button.css';
import androidurlIcon from '../images/android/url-icon.svg';
import androidcallIcon from '../images/android/call-icon.svg';
import androidcopyIcon from '../images/android/copycode-icon.svg';
import iosurlIcon from '../images/ios/url-icon.svg';
import ioscallIcon from '../images/ios/call-icon.svg';
import ioscopyIcon from '../images/ios/copycode-icon.svg';

export default function Button ({button, os, lastbtn}) {
    console.log(button);

    const btnsObj = {
        'COPY_CODE': { "icon": (os === 'android') ? androidcopyIcon : ioscopyIcon, "label": "Copy Code" },
        'QUICK_REPLY' : {"icon": '', "label": button.text},
        'PHONE_NUMBER': { "icon": (os === 'android') ? androidcallIcon : ioscallIcon, "label": button.text },
        'URL': { "icon": (os === 'android') ? androidurlIcon : iosurlIcon, "label": button.text}
    };

    console.log(btnsObj[button.type].icon);
    const btn = (
        <div className={`button-wrapper ${os}-button-wrapper ${(lastbtn && os === 'ios') ? "ios-last-button" : ""}`}>
            <a href="#">
                {(btnsObj[button.type].icon !== '') ? <img className={`${os}-icon ${(button.type === 'COPY_CODE') ? "copycode" : ""}`} src={btnsObj[button.type].icon}></img> : <></>}
                <p>{btnsObj[button.type].label}</p>
            </a>
        </div>
    );

    const displayButtons = () => {
        return btn;
    }

    return (
        <>
            {displayButtons()}
        </>
    )
}