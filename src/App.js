import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

const API_ENDPOINT = 'https://backend-supabase.herokuapp.com/users';

function App() {
  return (
    <div className="App">
      <StrangerThings />
    </div>
  );
}

export default App;
