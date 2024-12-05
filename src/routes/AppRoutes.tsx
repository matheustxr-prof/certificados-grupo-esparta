import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicPage from '../pages/PublicPage';
import AdminPage from '../pages/AdminPage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/certificados" element={<PublicPage />} />
        <Route path="/certificados/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
