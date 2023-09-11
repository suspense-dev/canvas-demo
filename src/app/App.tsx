import React from 'react';

import './App.css';
import '../entities/rectangle'; // to avoid tree shaking for the module
import { Handler } from "./lib";
import { RootPage } from "../pages";

export const App = () => {
  return (
    <>
      <Handler/>
      <div className="App">
        <RootPage/>
      </div>
    </>
  );
}
