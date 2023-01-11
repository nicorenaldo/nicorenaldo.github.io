import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { themeChange } from 'theme-change';
import GenericLayout from './components/Layout/GenericLayout';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';
import { BlogRoutes, ProjectRoute } from './routes';

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <Routes>
      <Route path='/' element={<GenericLayout />}>
        <Route index element={<HomePage />} />
        <Route path='*' element={<Navigate to='/not-found' replace />} />
        <Route path='not-found' element={<NotFoundPage />} />
      </Route>

      <Route path='projects' element={<GenericLayout />}>
        {ProjectRoute}
      </Route>

      <Route path='blogs' element={<GenericLayout />}>
        {BlogRoutes}
      </Route>
    </Routes>
  );
}

export default App;
