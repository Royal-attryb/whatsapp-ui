import '../styles/Message.css';
import Body from './Body';
import Button from './Button';
import Footer from './Footer';
import Header from './Header';
import TimeStamp from './TimeStamp';
import tail from '../images/ios/Tail.svg';

export default function Message ({template, os}) {

    const header = template.components.filter((comp) => (comp.type === 'HEADER'))[0];
    const body = template.components.filter((comp) => (comp.type === 'BODY'))[0];
    const footer = template.components.filter((comp) => (comp.type === 'FOOTER'))[0];
    const buttons = template.components.filter((comp) => (comp.type === 'BUTTONS'))[0].buttons;
    
    return (
        <div className='message-container'>
            <span className={`bubblevector ${os}-bubblevector`}>
                {(os === "android") ? <svg viewBox="0 0 8 13" height="13" width="8" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 8 13"><title>tail-in</title><path opacity="0.13" fill="#0000000" d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"></path><path fill="currentColor" d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"></path></svg> :
                <img src={tail}></img>}
            </span>
            <div className="message-wrapper">
                <div className='message-content-wrapper'>
                    <div className={`message-content ${os}-message-content ${(buttons.length == 0 && os === "ios") ? "ios-no-buttons" : ""}`}>
                        <Header header={header} />
                        <br />
                        <Body body={body} />
                        <br />
                        <Footer footer={footer} />
                        <TimeStamp />
                    </div>
                    <div className="buttons ios-buttons">
                        {buttons.map((button, index) => {if (index == buttons.length - 1) {
                            return <Button button={button} os={os} lastbtn="true" />  
                        }
                        return <Button button={button} os={os} />})}
                    </div>
                </div>              
            </div>
        </div>
    );
}