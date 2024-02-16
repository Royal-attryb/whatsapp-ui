import '../styles/ScreenMessage.css';
import Messages from './Messages';

export default function ScreenMessage ({template}) {
    return (
        <div className="screen-message">
            <Messages template={template} />
        </div>
    )
}