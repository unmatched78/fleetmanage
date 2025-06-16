// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotesPage from './pages/NotesPage';
import Page from './pages/Home'
function App() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* Landing is public */}
        <Route path="/" element={<LandingPage />} />

        {/* If already logged in, redirect /login → /notes */}
        <Route
          path="/login"
          element={user ? <Navigate to="/dashboard" replace /> : <LoginPage />}
        />

        {/* If already logged in, redirect /register → /notes */}
        <Route
          path="/register"
          element={user ? <Navigate to="/dashboard" replace /> : <RegisterPage />}
        />

        {/* Protected /notes */}
        <Route
          path="/notes"
          element={
            <PrivateRoute>
              <NotesPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Page />
            </PrivateRoute>
          }
        />

        {/* Catch-all redirects to either /notes or /login */}
        <Route
          path="*"
          element={<Navigate to={user ? '/notes' : '/login'} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
