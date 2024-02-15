import '../styles/Header.css';
import ImgFallback from '../images/ImgFallback.svg';
import DocFallback from '../images/DocFallback.svg';

export default function Header ({format, text, header_handle}) {

    const textInput = (<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>);
    const image = (
        <div className='media-container'>
            <img className='media' src={ImgFallback}></img>
        </div>
    );

    const video = (
        <div className='media-container'>
            <video className='media' src=""></video>
        </div>
    );

    const doc = (
        <div className='media-container'>
            <img className='media' src={DocFallback}></img>
        </div>
    );
    return (
        <>
            {/* {textInput} */}
            {/* {image} */}
            {doc}
            {/* {video} */}
        </>
    )
}