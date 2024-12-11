import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Layout from './Layout';
import Register from './pages/Register'
import ComponentDetailPage from './pages/ComponentDetailPage';
import ProfilePage from './pages/Profile';
import NotFoundPage from './pages/NotFound';
import UnauthorizedPage from './pages/Unauth';
import PostCreatePage from './pages/CreatePost';

import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Protected Routes with Layout */}
          <Route element={<Layout />}>
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/component" 
              element={
                <ProtectedRoute>
                  <ComponentDetailPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route 
              path="/create" 
              element={
                <ProtectedRoute>
                  <PostCreatePage />
                </ProtectedRoute>
              }
            />
          </Route>
        
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/notfound" element={<NotFoundPage />} />
          <Route path="/unauth" element={<UnauthorizedPage />} />
          
          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<Navigate to="/notfound" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;