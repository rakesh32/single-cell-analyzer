import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PublicLayout from '../components/laylout/publicLayout';
import AnalysisPage from '../pages/analysis';
import Home from '../pages/home';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="/analysis" element={<AnalysisPage />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
