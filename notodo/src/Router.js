import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/loginPage/loginPage";
import CalendarPage from './pages/calendarPage/calendarPage';
import NotodoPage from "./pages/notodoPage/notodoPage";
import KakaoLogin from "./pages/loginPage/kakaoLogin";
import React from 'react';
import FollowListPage from './pages/FollowListPage';
import MainWrapper from './layouts/MainWrapper';
import SettingPage from './pages/SettingPage';
import SearchPage from './pages/SearchPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/redirect" element={<KakaoLogin />} />
        <Route element={<MainWrapper />}>
          <Route path="/mycalendar" element={<CalendarPage />} />
          <Route path="/yourcalendar/:id" element={<CalendarPage />} />
          <Route path="/notodo" element={<NotodoPage />} />
          <Route path="/notodo/:id" element={<NotodoPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/follow" element={<FollowListPage />} />
          <Route path="/setting" element={<SettingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;