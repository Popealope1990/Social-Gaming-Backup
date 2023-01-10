import './App.css';
import {GameFormSubmit} from './Components/GameFormSubmit';
import {GameFormUpdate} from './Components/GameFormUpdate';



function App() {
  return (
      <div className="GameBody">
        <h1>
          Welcome To Game Rater 
        </h1>
        <GameFormSubmit/>
        <br></br>
        <br></br>
        <GameFormUpdate/>
      </div>
   
  );
}

export default App;
