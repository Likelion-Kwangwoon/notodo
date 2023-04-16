import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/loginPage/loginPage';
import CalenderPage from './components/calenderPage/calenderPage';
import NotodoPage from './components/notodoPage/notodoPage';
import React from 'react';

function Router() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/calender' element={<CalenderPage />} />
        <Route path='/notodo' element={<NotodoPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router;