/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unauthenticate } from '../features/authentication/authSlice';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(unauthenticate());
    navigate('/', { replace: true });
  }, []);

  return <></>;
};

export default Logout;
