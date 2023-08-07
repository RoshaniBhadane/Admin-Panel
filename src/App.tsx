import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminHome } from './pages/home/AdminHome';
import { Login } from './pages/login/Login';
import ProtectedRoute from './components/protectedRoute/Protected';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/' element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<AdminHome />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App
