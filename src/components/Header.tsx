"use client";

import React from 'react';
import TopBar from './header/TopBar';
import MainHeader from './header/MainHeader';
import NavigationBar from './header/NavigationBar';

const Header: React.FC = () => {
  return (
    <header>
      <TopBar />
      <MainHeader />
      <NavigationBar />
    </header>
  );
};

export default Header;
