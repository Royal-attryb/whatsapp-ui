import '../styles/Message.css';
import Body from './Body';
import Button from './Button';
import Footer from './Footer';
import Header from './Header';
import TimeStamp from './TimeStamp';
import image from '../images/BubbleVector.svg';

export default function Message () {
    return (
        <div className='message-container'>
            <img src={image} className='bubblevector'></img>
            <div className="message-wrapper">
                <div className="message-content">
                    <Header />
                    <br />
                    <Body />
                    <br />
                    <Footer />
                    <TimeStamp />
                </div>
                <div className="buttons">
                    <Button />
                </div>   
            </div>
        </div>
    );
}