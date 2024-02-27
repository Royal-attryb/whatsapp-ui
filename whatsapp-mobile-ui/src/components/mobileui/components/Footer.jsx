import './Footer.css';

export default function Footer ({footer, os}) {
    // console.log(footer);
    return (
        <p className={`footer ${os}-footer`}>{footer.text}</p>
    )
}