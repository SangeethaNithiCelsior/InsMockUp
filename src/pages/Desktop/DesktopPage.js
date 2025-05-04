import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './DesktopPage.module.css';

const DesktopPage = () => {
    const [activeTopTab, setActiveTopTab] = useState('Desktop');
    const [activeSideItem, setActiveSideItem] = useState('Summary');
    const navigate = useNavigate();

    const handleTopTabClick = (tab) => {
        setActiveTopTab(tab);
        if (tab === 'New Account') {
            navigate('/create-account'); // Navigate to the Create Account page
        } else if (tab === 'New Submission') {
            navigate('/new-submission'); // Navigate to the New Submissions
        } else if (tab === 'Contact') {
            alert('Contact tab clicked!'); // Placeholder for Contact functionality
        } else if (tab === 'Search') {
            alert('Search tab clicked!'); // Placeholder for Search functionality
        } else if (tab === 'Administration') {
            alert('Administration tab clicked!'); // Placeholder for Administration functionality
        }
    };

    const handleSideItemClick = (item) => setActiveSideItem(item);

    const handleLogout = () => {
        alert('You have been logged out.');
        navigate('/'); // Redirect to the Login Page
    };

    return (
        <div className={styles.desktopContainer}>
            {/* Top Bar */}
            <div className={styles.topBar}>
                <div className={styles.appName}>PolicyMaster</div>
                <Navbar
                    tabs={['Desktop', 'Account', 'Submission', 'Contact', 'Search', 'Administration']}
                    activeTab={activeTopTab}
                    onTabClick={handleTopTabClick}
                    onLogout={handleLogout}
                />
            </div>

            {/* Content Layout */}
            <div className={styles.contentLayout}>
                {/* Sidebar */}
                <Sidebar
                    items={[
                        'Actions',
                        'Summary',
                        'My Activities',
                        'My Accounts',
                        'My Submissions',
                        'My Renewals',
                        'Audits',
                        'Other Policy Transaction',
                        'My Queues',
                    ]}
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
