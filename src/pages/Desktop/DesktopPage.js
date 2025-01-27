import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './DesktopPage.module.css';

const DesktopPage = () => {
  const [activeTopTab, setActiveTopTab] = useState('Desktop');
  const [activeSideItem, setActiveSideItem] = useState('Summary');
  const navigate = useNavigate();

  const handleTopTabClick = (tab) => setActiveTopTab(tab);
  const handleSideItemClick = (item) => setActiveSideItem(item);

  const handleLogout = () => {
    alert('You have been logged out.');
    navigate('/'); // Redirect to the Login Page
  };

  return (
    <div className={styles.desktopContainer}>
      {/* Top Bar */}
      <Navbar
        tabs={['Desktop', 'Account']}
        activeTab={activeTopTab}
        onTabClick={handleTopTabClick}
        onLogout={handleLogout} // Pass the logout function
      />

      {/* Content Layout */}
      <div className={styles.contentLayout}>
        {/* Sidebar */}
        <Sidebar
          items={['Actions', 'Summary']}
          activeItem={activeSideItem}
          onItemClick={handleSideItemClick}
        />

        {/* Main Content */}
        <div className={styles.mainContent}>
          <h1>My Summary</h1>
          <p>Welcome to your Desktop page! Here, you can view your summary.</p>
        </div>
      </div>
    </div>
  );
};

export default DesktopPage;
