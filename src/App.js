import Timer from './component/Timer';
import './App.css';
import Pollingdisplay from './component/Pollingdisplay';

function App() {
  return (
    <div className="App">
      <h1>Sukkur IBA University</h1>
      <h1>{<Timer />}</h1>
    </div>
  );
}

export default App;
