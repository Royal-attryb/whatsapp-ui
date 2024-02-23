import Main from './components/Main.jsx';
import Preview from './pages/Preview.jsx';
import OsToggle from './components/OsToggle.jsx';
import { useState } from 'react';

function App() {
  const [os, setOs] = useState("ios");
  function handleToggle(event) {
    console.log(event);
    setOs(event.target.checked ? "ios" : "android");
  }

  return (
    <>
      {/* <Preview /> */}
      <OsToggle onToggle={handleToggle} />
      <Main os={os} />
      {/* <div style={{"display": "flex"}}>
        <Main os="ios"/>
        <Main os="android" />
      </div> */}
    </>
  );
}

export default App;
