import { Navigate, Route, Routes } from 'react-router-dom';
import GenericLayout from './components/Layout/GenericLayout';
import NotFoundPage from './pages/NotFound';
import AppRoutes from './routes';
import Logout from './utils/LogOut';
import { RequireAuth } from './utils/RequireAuth';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <RequireAuth redirectTo='/login'>
            <GenericLayout />
          </RequireAuth>
        }
      >
        {AppRoutes}
      </Route>

      <Route path='/logout' element={<Logout />} />
      <Route path='/not-found' element={<NotFoundPage />} />
      <Route path='*' element={<Navigate to='/not-found' replace />} />
    </Routes>
  );
}

export default App;
