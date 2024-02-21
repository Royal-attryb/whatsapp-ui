import '../styles/Button.css';
import urlIcon from '../images/android/url-icon.svg';
import callIcon from '../images/android/call-icon.svg';
import copyIcon from '../images/android/copycode-icon.svg';

export default function Button ({button, os, lastbtn}) {
    // console.log(button);

    const btnsObj = {
        'COPY_CODE': { "icon": copyIcon, "label": "Copy Code" },
        'QUICK_REPLY' : {"icon": '', "label": "Hello"},
        'PHONE_NUMBER': { "icon": callIcon, "label": "Contact us" },
        'URL': { "icon": urlIcon, "label": "Click here"}
    };

    console.log(btnsObj[button.type].icon);
    const btn = (
        <div className={`button-wrapper ${os}-button-wrapper ${(lastbtn && os === 'ios') ? "ios-last-button" : ""}`}>
            <a href="#">
                {(btnsObj[button.type].icon !== '') ? <img className='icon' src={btnsObj[button.type].icon}></img> : <></>}
                <span>{btnsObj[button.type].label}</span>
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