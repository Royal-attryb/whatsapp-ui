import '../styles/Header.css';
import ImgFallback from '../images/ImgFallback.svg';
import VideoFallback from '../images/VideoFallback.svg';
import DocFallback from '../images/DocFallback.svg';

export default function Header ({header, os}) {

    console.log("Header", header.example.header_handle[0]);
    const text = (
        <p className={`text ${os}-text`}>{header.text}</p>
    );

    const image = (
        <div className='media-container'>
            <img className='media' src={header.example.header_handle[0] || ImgFallback}></img>
        </div>
    );

    const video = (
        <div className='media-container'>
            <img className='media' src={VideoFallback}></img>
        </div>
    );

    const doc = (
        <div className='media-container'>
            <img className='media' src={DocFallback} ></img>
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