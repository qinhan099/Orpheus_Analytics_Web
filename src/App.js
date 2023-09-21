import './App.css';
import * as React from 'react';
import MainPage from './Componenets/MainPage';
import NLPTable from './Componenets/NLPTable';
import { Route, Routes} from 'react-router-dom';
import NavBar from './Componenets/NavBar';

function App() {

   


  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element= { <MainPage/>} />
        <Route path='/nlp' element= { <NLPTable/>}/>
      </Routes>
    </div>
  );
}

export default App;
