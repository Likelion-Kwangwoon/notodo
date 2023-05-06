import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/loginPage/loginPage";
import CalendarPage from './pages/calendarPage/calendarPage';
import NotodoPage from "./pages/notodoPage/notodoPage";
import KakaoLogin from "./pages/loginPage/kakaoLogin";
import React from 'react';

function Router() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/redirect' element={<KakaoLogin />} />
        <Route path='/calendar' element={<CalendarPage />} />
        <Route path='/notodo' element={<NotodoPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router;