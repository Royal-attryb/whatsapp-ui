import './TimeStamp.css';

export default function TimeStamp ({os}) {
    const hr = 1, min = 30;
    return (
        <p className={`time ${os}-time`}>{hr}.{min} PM</p>
    );
}