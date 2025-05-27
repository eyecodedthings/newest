import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import { Calculator } from './components';

function App() {
  return (
    <div className="App bg-gray-900 min-h-screen text-white">
      <Calculator />
    </div>
  );
}

export default App;