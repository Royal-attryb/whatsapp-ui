import '../styles/ScreenHeader.css';
import androidArrowBack from '../images/android/ArrowBack.svg';
import iosArrowBack from '../images/ios/ArrowBack.svg';
import androidBusinessLogo from '../images/android/BusinessLogo.svg';
import iosBusinessLogo from '../images/ios/BusinessLogo.svg';
import Call from '../images/android/Call.svg';
import More from '../images/android/More.svg';
import iosAudioCall from '../images/ios/AudioCall.svg';
import iosVideoCall from '../images/ios/VideoCall.svg';
import androidVerified from '../images/android/Verified.svg';
import iosVerified from '../images/ios/Verified.svg';
import androidBatteryWifi from '../images/android/BatteryWifi.svg';
import iosBatteryWifi from '../images/ios/BatteryWifi.svg';
import dynamicIsland from '../images/ios/DynamicIsland.svg';
import camera from '../images/ios/Camera.svg';
import { useState, useEffect } from 'react';

export default function ScreenHeader ({os}) {

    const [today, setDate] = useState(new Date());
    const liveTime = function () {
        const currDate = new Date();

        setDate(currDate);
    }

    useEffect(() => {
        liveTime();
    }, []);
    
    const timeFormat = () => {
        const hrs = today.getHours(), mins = today.getMinutes();

        return (
            {'hours': (hrs < 10) ? `${'0' + hrs}` : hrs, 'minutes': (mins < 10) ? `${'0' + mins}` : mins}
        );
    }

    return (
        <div className={`screen-header ${(os === "android") ? "android-screen-header" : "ios-screen-header"}`}>
            <div className={`screen-header-time ${(os === "android") ? "android-screen-header-time" : "ios-screen-header-time"}`}>
                <div className={`header-time ${(os === "android") ? "android-header-time" : "ios-header-time"}`}>
                    <span>{timeFormat().hours}:{timeFormat().minutes}</span>
                </div>
                {(os === "android") ? <img src={androidBatteryWifi}></img> : (<><img className="dynamic-island" src={dynamicIsland}></img>
                <img className='camera' src={camera}></img>
                <img className="ios-battery-wifi" src={iosBatteryWifi}></img></>)}
            </div>
            
            <div className={`screen-header-data ${os}-screen-header-data`}>
                <div className='img-container arrow-image-container'>
                    <img src={(os === "android") ? androidArrowBack : iosArrowBack} className={`arrowback ${os}-arrowback`}></img>
                </div>
                <div className='business-data'>
                    <div className='business-logo-container'>
                        <img src={(os === "android") ? androidBusinessLogo : iosBusinessLogo} className={`business-logo ${os}-business-logo`}></img>
                    </div>
                    <div className='business-name-wrapper'>
                        <span className={`business-name ${os}-business-name`}>Tarinika</span>
                        <img src={(os === "android") ? androidVerified : iosVerified} className='verified-logo'></img>
                    </div>
                </div>
                <div className='call-more'>
                    <div className='img-container'>
                        <img src={(os === "android") ? Call : iosVideoCall} className='call'></img>
                    </div>
                    <div className='img-container'>
                        <img src={(os === "android") ? More: iosAudioCall} className='more'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}