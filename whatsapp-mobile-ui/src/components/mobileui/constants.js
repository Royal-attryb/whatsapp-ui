export const os = {
    and: "android",
    ios: "ios"
}

export const template = {
    "name": "seasonal_promotion",
    "language": "en_US",
    "category": "MARKETING",
    "components": [
      {
        "type": "HEADER",
        "format": "IMAGE",
        "example": {
          "header_handle": [
            ""
          ]
        }
      },
      {
        "type": "BODY",
        "text": `Hi {{1}}, 

        ✨Ready to add some glamour to your style? Tarinika's Trending Style of the Month is here to help! From minimal everyday jewelry to regal festive designs, we have the perfect pieces to complete your look. Don't wait any longer, start shopping now! 

        ✅ 1-year warranty on all products 
        ✅ Trusted by 75k+ women worldwide 
        ✅ Personalization available 
        ✅ 24X7 customer support`,
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
        "text": "Reply STOP to unsubscribe."
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
            "text": "Shop Now",
            "url": "https://www.luckyshrub.com/shop?promo={{1}}",
            "example": [
              "summer2023"
            ]
          },
          // {
          //   "type": "COPY_CODE",
          //   "example": "250FF"
          // }  
        ]
      }
    ]
};