import Dashboard from '../src/Pages/Dashboard';
import {GameProvider} from './Contexts/game';
import './styles/global.css';


function App() {
  return (
    <div>
      <GameProvider>
        <Dashboard />
      </GameProvider>
    </div>
  );
}

export default App;
