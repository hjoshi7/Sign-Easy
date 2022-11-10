import {HashRouter as Router, Route, Routes} from "react-router-dom";

import Home from './pages/Home'
import Translator from './pages/Translator'
import Background from './pages/Background'
import Practice from './pages/Practice'
import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

function App() {
  return (
    <React.StrictMode>
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/translator" element={<Translator />}/>
          <Route path="/practice" element={<Practice />}/>
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
  
  );
}

export default App;