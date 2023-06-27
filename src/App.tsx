import React from 'react';
import logo from './poke_ball_icon.svg';
import './App.css';
import {Pokedex} from "./features/pokedex/Pokedex";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div className={"App-scroll-down"}>
            <div className={"App-caret-down"}></div>
              <div className={"App-scroll-message"}>Scroll Down</div>
          </div>

      </header>


        <Pokedex/>
    </div>
  );
}

export default App;
