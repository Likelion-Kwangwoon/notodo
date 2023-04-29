import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/loginPage/loginPage';
import CalendarPage from './components/calendarPage/calendarPage';
import NotodoPage from './components/notodoPage/notodoPage';
import KakaoLogin from './components/loginPage/kakaoLogin';
import React from 'react';

function Router() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/redirect' element={<KakaoLogin />} />
        <Route path='/calendar' element={<CalenderPage />} />
        <Route path='/notodo' element={<NotodoPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router;