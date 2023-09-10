import React from 'react';
import { Scene } from "../entities/scene";
import { Toolbar } from "../widgets/toolbar";

import './App.css';
import '../entities/rectangle'; // to avoid tree shaking for the module
import { Handler } from "./lib";
import { RootPage } from "../pages";

export const App = () => {
  return (
    <>
      <Handler/>
      <div className="App">
        <RootPage>
          <Scene/>
          <Toolbar/>
        </RootPage>
      </div>
    </>
  );
}
