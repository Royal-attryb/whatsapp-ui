import Message from "./Message";
import '../styles/Messages.css';

export default function Messages ({template}) {
    return (
        <div className="messages-wrapper">
            <Message template={template}/>
            {/* <Message /> */}
        </div> 
    );
}