// Supreme Component
// Component that indexes all the others
// É a file onde vamos colocando os outros Components que fazemos

import './App.css';
import Greeting from './component/Greeting.js'
import StateHook from './component/UseStateHook';
import Home from './component/Home';
import Home2 from './component/Home2';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import EffectDemonstration from './component/UseEffectHook';
import UseReffDemonstration from './component/UseReffHook';
import ParentComponent from './component/PropsParent';
import ContexParent from './component/UseContextParent';
import Form from './component/FormHandle';
import ConditionalRend from './component/ConditionalRend';

function App() {
  return (
    <div className="App">

      <Greeting />

      <a href='/home' > Home Page </a>

      <br></br>
      <br></br>

      <a href='/home2'> Second Home Page </a>

      <BrowserRouter>
        <Routes>
          <Route exact path='/home' Component={Home}></Route>

          <Route exact path='/home2' Component={Home2}></Route>
        </Routes>
      </BrowserRouter>

      <br></br>
      <br></br>

      <StateHook />

      <br></br>
      <br></br>

      <EffectDemonstration />

      <br></br>

      <UseReffDemonstration />

      <br></br>

      <ParentComponent />

      <ContexParent />

      <br></br>

      <Form />

      <br></br>

      <ConditionalRend />

    </div>
  );
}

export default App;