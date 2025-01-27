import React from 'react';
import PropTypes from 'prop-types';
import styles from './Sidebar.module.css';

const Sidebar = ({ items, activeItem, onItemClick }) => {
  return (
    <div className={styles.sidebar}>
      {items.map((item, index) => (
        <button
          key={index}
          className={`${styles.sidebarItem} ${activeItem === item ? styles.activeItem : ''}`}
          onClick={() => onItemClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

Sidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeItem: PropTypes.string.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default Sidebar;
