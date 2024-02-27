import './Mobile.css';
import ScreenHeader from './ScreenHeader';
import ScreenInput from './ScreenInput';
import ScreenMessage from './ScreenMessage';

export default function Mobile ({os="ios", template}) {
    // console.log("Template", template);
    return (
      <div className={`main-wrapper ${os}-main-wrapper`}>
          <div className={`body ${os}-body`} >
              <div className={`screen ${os}-screen`} >
                  <ScreenHeader os ={os} />
                  <ScreenMessage template={template} os={os} />
                  <ScreenInput os={os} />
              </div>
          </div>   
      </div>
  )
}