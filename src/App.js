import './App.css';
import Home from './Components/Home';
import Todaystasks from './Components/Todaystasks'
import Bottomnavbar from './Components/Bottomnavbar';
function App() {
  return (
    <div className="App">
      <Home/>
      <Todaystasks/>
      <Bottomnavbar/>
    </div>
  );
}

export default App;
