import '../styles/ScreenHeader.css';
import ArrowBack from '../images/ArrowBack.svg';
import BusinessLogo from '../images/BusinessLogo.svg';
import Call from '../images/Call.svg';
import More from '../images/More.svg';
import Verified from '../images/verified.svg';
import BatteryWifi from '../images/BatteryWifi.svg';

export default function ScreenHeader () {
    const hr = 1, min = 30;
    return (
        <div className="screen-header">
            <div className='screen-header-time'>
                <div className='header-time'>
                    <span>{hr}:{min}</span>
                </div>
                <img src={BatteryWifi}></img>
            </div>
            <div className='screen-header-data'>
                <img src={ArrowBack} className='arrowback'></img>
                <div className='business-data'>
                    <img src={BusinessLogo} className='business-logo'></img>
                    <div className='business-name-wrapper'>
                        <span className='business-name'>Business name</span>
                        <img src={Verified} className='verified-logo'></img>
                    </div>
                </div>
                <img src={Call} className='call'></img>
                <img src={More} className='more'></img>
            </div>
        </div>
    )
}