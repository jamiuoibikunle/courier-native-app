import React from 'react';
import Home from './components/home/Home';
import {NativeRouter, Route, Routes} from 'react-router-native';
import Dashboard from './components/dashboard/Dashboard';

const App = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </NativeRouter>
  );
};

export default App;
