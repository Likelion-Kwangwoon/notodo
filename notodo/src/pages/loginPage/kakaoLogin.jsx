import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../redux/store';

function KakaoLogin() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let token = new URL(window.location.href).searchParams.get("token");

  useEffect( () => {
    dispatch(logIn(`Bearer ${token}`));
    navigate("/mycalendar")
  }, [dispatch, navigate, token]);
  
  return (
    <div />
  );
}

export default KakaoLogin;