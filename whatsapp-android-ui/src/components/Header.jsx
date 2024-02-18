import '../styles/Header.css';
import ImgFallback from '../images/ImgFallback.svg';
import DocFallback from '../images/DocFallback.svg';

export default function Header ({header}) {

    console.log("Header", header);
    const text = (<p className='text'>{header.text}</p>);
    const image = (
        <div className='media-container'>
            <img className='media' src={ImgFallback}></img>
        </div>
    );

    const video = (
        <div className='media-container'>
            <video className='media' src={ImgFallback}></video>
        </div>
    );

    const doc = (
        <div className='media-container'>
            <img className='media' src={DocFallback}></img>
        </div>
    );

    const handleDisplay = () => {
        if (header.format === 'TEXT')
            return text;

        else if (header.format === 'IMAGE')
            return image;

        else if (header.format === 'VIDEO')
            return video;

        else if (header.format === 'DOCUMENT')
            return doc;
    }

    return (
        <>
            {handleDisplay()}
        </>
    )
}