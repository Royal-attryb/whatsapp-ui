import '../styles/Main.css';
import ScreenHeader from './ScreenHeader';
import ScreenInput from './ScreenInput';
import ScreenMessage from './ScreenMessage';

export default function Main () {
    return (
        <div className="main-wrapper">
            <div className="screen">
                <ScreenHeader />
                <ScreenMessage />
                <ScreenInput />
            </div>
        </div>
    )
}