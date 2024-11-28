import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PublicLayout from '../components/laylout/publicLayout';
import AnalysisPage from '../pages/analysis';
import Home from '../pages/home';
import ResourcePage from '../pages/resources';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="/analysis" element={<AnalysisPage />} />
        <Route path='/resources' element={<ResourcePage />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
