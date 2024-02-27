import './ScreenMessage.css';
import Messages from './Messages';

export default function ScreenMessage ({template, os}) {
    return (
        <div className="screen-message">
            <Messages template={template} os={os} />
        </div>
    )
}