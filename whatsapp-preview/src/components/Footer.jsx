import '../styles/Footer.css';

export default function Footer ({footer}) {
    // console.log(footer);
    return (
        <p className='footer'>{footer.text}</p>
    )
}