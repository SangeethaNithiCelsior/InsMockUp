import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tab.module.css';

const Tab = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className={styles.tabContainer}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
          onClick={() => onTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

Tab.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired, // List of tabs
  activeTab: PropTypes.string.isRequired, // Currently selected tab
  onTabClick: PropTypes.func.isRequired, // Callback when a tab is clicked
};

export default Tab;
