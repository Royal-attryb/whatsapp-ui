import '../styles/Body.css';

export default function Body ({body, os}) {

    // const regex = /{{([0-9]+)}}/g;
    // const examples = body.example.body_text[0];

    // function replacer(match, p1, string) {
    //     console.log(p1);
    //     return examples[p1 - 1];
    // }

    // const sampleText = body.text.replaceAll(regex, replacer);
    // console.log(examples);
    return (
        <p className={`body-text ${os}-body-text`}>{body.text}</p>
    );
}