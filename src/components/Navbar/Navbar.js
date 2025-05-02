import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';

const Navbar = ({ tabs, activeTab, onTabClick, onLogout }) => {
    const [isAccountDropdownVisible, setIsAccountDropdownVisible] = useState(false);
    const [isSubmissionDropdownVisible, setIsSubmissionDropdownVisible] = useState(false);

    const handleAccountMouseEnter = () => {
        setIsAccountDropdownVisible(true);
    };

    const handleAccountMouseLeave = () => {
        setIsAccountDropdownVisible(false);
    };

    const handleSubmissionMouseEnter = () => {
        setIsSubmissionDropdownVisible(true);
    };

    const handleSubmissionMouseLeave = () => {
        setIsSubmissionDropdownVisible(false);
    };

    return (
        <div className={styles.navbar}>
            <div className={styles.navTabs}>
                {tabs.map((tab, index) => {
                    if (tab === 'Account') {
                        return (
                            <div
                                key={index}
                                className={styles.dropdown}
                                onMouseEnter={handleAccountMouseEnter}
                                onMouseLeave={handleAccountMouseLeave}
                            >
                                <button
                                    className={`${styles.navTab} ${activeTab === tab ? styles.activeTab : ''}`}
                                    onClick={() => onTabClick(tab)}
                                >
                                    {tab} ▼ {/* Down arrow icon */}
                                </button>
                                {isAccountDropdownVisible && (
                                    <div className={styles.dropdownContent}>
                                        <button
                                            className={styles.dropdownItem}
                                            onClick={() => onTabClick('New Account')}
                                        >
                                            New Account
                                        </button>
                                    </div>
                                )}
                            </div>
                        );
                    } else if (tab === 'Submission') {
                        return (
                            <div
                                key={index}
                                className={styles.dropdown}
                                onMouseEnter={handleSubmissionMouseEnter}
                                onMouseLeave={handleSubmissionMouseLeave}
                            >
                                <button
                                    className={`${styles.navTab} ${activeTab === tab ? styles.activeTab : ''}`}
                                    onClick={() => onTabClick(tab)}
                                >
                                    {tab} ▼ {/* Down arrow icon */}
                                </button>
                                {isSubmissionDropdownVisible && (
                                    <div className={styles.dropdownContent}>
                                        <button
                                            className={styles.dropdownItem}
                                            onClick={() => onTabClick('New Submission')}
                                        >
                                            New Submission
                                        </button>
                                    </div>
                                )}
                            </div>
                        );
                    } else {
                        return (
                            <button
                                key={index}
                                className={`${styles.navTab} ${activeTab === tab ? styles.activeTab : ''}`}
                                onClick={() => onTabClick(tab)}
                            >
                                {tab}
                            </button>
                        );
                    }
                })}
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
