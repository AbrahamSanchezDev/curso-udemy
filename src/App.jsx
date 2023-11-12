import './App.css';
import Game from "./Components/Game";
import MyFirstComponent from './Components/FirstComponent';
import TextStrokeAnimation from './Components/TextStrokeAnimation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyFirstComponent />
        <TextStrokeAnimation />
        <Game />
      </header>


    </div>
  );
}
export default App;
