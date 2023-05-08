import { useContext, useEffect, useState } from 'react'
import { Router } from './router';
import { Context, ContextProvider } from './context/Context';
import io from 'socket.io-client';

const socket = io("http://localhost:3001");

function App() {

  return (
    <ContextProvider>
      <Router socket={socket}/>
    </ContextProvider>
  );
}

export default App;