import Main from './components/Main.jsx';
import Preview from './pages/Preview.jsx';

function App() {
  return (
    <>
      {/* <Preview /> */}
      <div style={{"display": "flex"}}>
        <Main os="ios"/>
        <Main os="android" />
      </div>
    </>
  );
}

export default App;
