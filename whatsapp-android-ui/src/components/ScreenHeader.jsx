import '../styles/ScreenHeader.css';
import ArrowBack from '../images/ArrowBack.svg';
import BusinessLogo from '../images/BusinessLogo.svg';
import Call from '../images/Call.svg';
import More from '../images/More.svg';
import Verified from '../images/verified.svg';
import BatteryWifi from '../images/BatteryWifi.svg';
import { useState, useEffect } from 'react';

export default function ScreenHeader () {

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
        <div className="screen-header">
            <div className='screen-header-time'>
                <div className='header-time'>
                    <span>{timeFormat().hours}:{timeFormat().minutes}</span>
                </div>
                <img src={BatteryWifi}></img>
            </div>
            <div className='screen-header-data'>
                <img src={ArrowBack} className='arrowback'></img>
                <div className='business-data'>
                    <img src={BusinessLogo} className='business-logo'></img>
                    <div className='business-name-wrapper'>
                        <span className='business-name'>Tarinika</span>
                        <img src={Verified} className='verified-logo'></img>
                    </div>
                </div>
                <img src={Call} className='call'></img>
                <img src={More} className='more'></img>
            </div>
        </div>
    )
}