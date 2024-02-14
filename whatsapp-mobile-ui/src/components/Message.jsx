import '../styles/Message.css';
import Body from './Body';
import Button from './Button';
import Footer from './Footer';
import Header from './Header';
import TimeStamp from './TimeStamp';
import image from '../images/BubbleVector.svg';

export default function Message () {
    return (
        <div className="message-wrapper">
            <div className='message-content-wrapper'>
                <img className="bubblevector" src={image}></img>
                <div className="message-content">
                    <Header />
                    <br />
                    <Body />
                    <br />
                    <Footer />
                    <TimeStamp />
                </div>
            </div>
            <div className="buttons">
                <Button />
                <Button />
            </div>
            
        </div>
    );
}