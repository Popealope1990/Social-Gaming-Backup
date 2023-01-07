import './App.css';
import {GameFormSubmit} from './Components/GameFormSubmit';
import {GameFormUpdate} from './Components/GameFormUpdate';


function App() {
  return (
      <div className="GameBody">
        <h1>
          Welcome To Game Rator 
        </h1>
        <GameFormSubmit/>

      
        <GameFormUpdate/>
      </div>
   
  );
}

export default App;
