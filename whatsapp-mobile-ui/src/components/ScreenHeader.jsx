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
        const timer = setInterval(liveTime, 60 * 1000);

        return () => {
            clearInterval(timer);
        }
    }, []);
    
    

    return (
        <div className="screen-header">
            <div className='screen-header-time'>
                <div className='header-time'>
                    <span>{today.getHours()}:{today.getMinutes()}</span>
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