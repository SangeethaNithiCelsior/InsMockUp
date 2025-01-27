import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';

const Navbar = ({ tabs, activeTab, onTabClick, onLogout }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navTabs}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${styles.navTab} ${activeTab === tab ? styles.activeTab : ''}`}
            onClick={() => onTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Logout Button */}
      <button className={styles.logoutButton} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

Navbar.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Navbar;
