import '../styles/Main.css';
import ScreenHeader from './ScreenHeader';
import ScreenInput from './ScreenInput';
import ScreenMessage from './ScreenMessage';
import phoneBody from '../images/android/PhoneBody.png';
import iPhoneBody from '../images/ios/PhoneBody.svg';

export default function Main ({os}) {
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
            "text": "Shop now through {{1}} and use code {{2}} to get {{3}} off of all merchandise. Shop now through {{1}} and use code {{2}} to get {{3}} off of all merchandise. Shop now through {{1}} and use code {{2}} to get {{3}} off of all merchandise. Shop now through {{1}} and use code {{2}} to get {{3}} off of all merchandise. Shop now through {{1}} and use code {{2}} to get {{3}} off of all merchandise. Shop now through {{1}} and use code {{2}} to get {{3}} off of all merchandise. Shop now through {{1}} and use code {{2}} to get {{3}} off of all merchandise. Shop now through {{1}} and use code {{2}} to get {{3}} off of all merchandise.",
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
                "text": "Contact us",
                "phone_number": "15550051310"
              },
              {
                "type": "URL",
                "text": "Link action",
                "url": "https://www.luckyshrub.com/shop?promo={{1}}",
                "example": [
                  "summer2023"
                ]
              },
              {
                "type": "COPY_CODE",
                "example": "250FF"
              },
              {
                "type": "QUICK_REPLY",
                "text": "Unsubscribe from Promos"
              },
              {
                "type": "PHONE_NUMBER",
                "text": "Contact us",
                "phone_number": "15550051310"
              },
              {
                "type": "URL",
                "text": "Link action",
                "url": "https://www.luckyshrub.com/shop?promo={{1}}",
                "example": [
                  "summer2023"
                ]
              },
              {
                "type": "COPY_CODE",
                "example": "250FF"
              },
              {
                "type": "QUICK_REPLY",
                "text": "Unsubscribe from Promos"
              },
              {
                "type": "PHONE_NUMBER",
                "text": "Contact us",
                "phone_number": "15550051310"
              },
              {
                "type": "URL",
                "text": "Link action",
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
          <div className={`body ${os}-body`}>
              <div className={`screen ${os}-screen`}>
                  <ScreenHeader os ={os} />
                  <ScreenMessage template={template} os={os} />
                  <ScreenInput os={os} />
              </div>
          </div>   
      </div>
  )
}