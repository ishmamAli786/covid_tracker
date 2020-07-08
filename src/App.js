import React,{useState} from 'react';
import './App.css';
import NavBar from './Components/NavBar.js';
import GridInfo from './Components/GridInfo.js';
import NavFoot from './Components/NavFoot.js';
function App() {
  const screenConfig = useState(0);
  return (
    <div>
    <NavBar/>
    <GridInfo currentScreen={screenConfig[0]}/>
    <NavFoot screenConfig={screenConfig}/>
    </div>
  );
}

export default App;
