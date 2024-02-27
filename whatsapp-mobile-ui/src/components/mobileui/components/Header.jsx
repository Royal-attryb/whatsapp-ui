import './Header.css';
import ImgFallback from '../images/ImgFallback.svg';
import VideoFallback from '../images/VideoFallback.svg';
import DocFallback from '../images/DocFallback.svg';

export default function Header ({header, os}) {

    const headersObj = {
        "IMAGE": ImgFallback,
        "VIDEO": VideoFallback,
        "DOCUMENT": DocFallback
    }

    console.log("Header", header.example.header_handle[0]);
    const text = (
        <p className={`text ${os}-text`}>{header.text}</p>
    );

    const media = (
        <div className='media-container'>
            <img className='media' src={headersObj[header.format]}></img>
        </div>
    );

    function displayHeader() {
        if (header.format === "TEXT")
            return text;

        else 
            return media;
    }

    return (
        <>
            {displayHeader()}
        </>
    )
}