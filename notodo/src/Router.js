import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/loginPage/loginPage';
import CalenderPage from './components/calenderPage/calenderPage';
import NotodoPage from './components/notodoPage/notodoPage';
import KakaoLogin from './components/loginPage/kakaoLogin';
import NotodoDetailPage from './components/NotodoDetailPage/NotodoDetailPage';
import React from 'react';




function Router() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/redirect' element={<KakaoLogin />} />
        <Route path='/calender' element={<CalenderPage />} />
        <Route path='/notodo' element={<NotodoPage />} />
          <Route path='/detail' element={<NotodoDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router;