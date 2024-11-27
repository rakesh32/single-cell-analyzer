import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header';
import HomeBanner from '../homebanner';

const PublicLayout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HomeBanner />
      <Outlet />
    </div>
  );
};

export default PublicLayout;
