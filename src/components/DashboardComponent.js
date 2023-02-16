import React, { useState } from 'react';
import Sidebar from './DashboardComponents/Sidebar';
import WelcomeBanner from './DashboardComponents/WelcomeBanner';
import Header from './Header';



const DashboardComponent = () => {

  return (
    
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <WelcomeBanner />
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardComponent;