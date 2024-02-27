import Message from "./Message";
import './Messages.css';

export default function Messages ({template, os}) {
    return (
        <div className="messages-wrapper">
            <Message template={template} os={os}/>
        </div> 
    );
}