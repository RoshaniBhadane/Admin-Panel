import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminHome } from './pages/home/AdminHome';
import { Login } from './pages/login/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<AdminHome />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
