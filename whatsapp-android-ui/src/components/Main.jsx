import '../styles/Main.css';
import ScreenHeader from './ScreenHeader';
import ScreenInput from './ScreenInput';
import ScreenMessage from './ScreenMessage';
import phoneBody from '../images/PhoneBody.png';

export default function Main () {
    const template = {
        "name": "seasonal_promotion",
        "language": "en_US",
        "category": "MARKETING",
        "components": [
          {
            "type": "HEADER",
            "format": "TEXT",
            "text": "Our {{1}} is on!",
            "example": {
              "header_text": [
                "Summer Sale"
              ]
            }
          },
          {
            "type": "BODY",
            "text": "Shop now through {{1}} and use code {{2}} to get {{3}} off of all merchandise.",
            "example": {
              "body_text": [
                [
                  "the end of August","25OFF","25%"
                ]
              ]
            }
          },
          {
            "type": "FOOTER",
            "text": "Use the buttons below to manage your marketing subscriptions"
          },
          {
            "type":"BUTTONS",
            "buttons": [
              {
                "type": "QUICK_REPLY",
                "text": "Unsubscribe from Promos"
              },
              {
                "type": "PHONE_NUMBER",
                "text": "Call",
                "phone_number": "15550051310"
              },
              {
                "type": "URL",
                "text": "Shop Now",
                "url": "https://www.luckyshrub.com/shop?promo={{1}}",
                "example": [
                  "summer2023"
                ]
              },
              {
                "type": "COPY_CODE",
                "example": "250FF"
              }
            ]
          }
        ]
    };
      
    // console.log("Template", template);
    return (
        <div className="main-wrapper">
                <div className='phone-body'>
                  <div className='img-wrapper'>
                    <img src={phoneBody}></img>
                  </div>
                    <div className="screen">
                        <ScreenHeader />
                        <ScreenMessage template={template}/>
                        <ScreenInput />
                    </div>
                </div>
            
        </div>
    )
}