import '../styles/TimeStamp.css';

export default function TimeStamp () {
    const hr = 1, min = 30;
    return (
        <p className='time'>{hr}.{min} PM</p>
    );
}