import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './DesktopPage.module.css';

const DesktopPage = () => {
    const [activeTopTab, setActiveTopTab] = useState('Desktop');
    const [activeSideItem, setActiveSideItem] = useState('Summary');
    const [showNewAccountButton, setShowNewAccountButton] = useState(false);
    const [showNewSubmissionButton, setShowNewSubmissionButton] = useState(false);
    const navigate = useNavigate();

    const handleTopTabClick = (tab) => {
        setActiveTopTab(tab);
        if (tab === 'Account') {
            setShowNewAccountButton(true);
            setShowNewSubmissionButton(false);
        } else if (tab === 'Submission') {
            setShowNewAccountButton(false);
            setShowNewSubmissionButton(true);
        } else {
            setShowNewAccountButton(false);
            setShowNewSubmissionButton(false);
        }
    };

    const handleSideItemClick = (item) => setActiveSideItem(item);

    const handleLogout = () => {
        alert('You have been logged out.');
        navigate('/'); // Redirect to the Login Page
    };

    const handleNewAccountClick = () => {
        navigate('/create-account'); // Navigate to the Create Account page
    };

    const handleNewSubmissionClick = () => {
        navigate('/select-product'); // Navigate to the Select Product page
    };

    return (
        <div className={styles.desktopContainer}>
            {/* Top Bar */}
            <Navbar
                tabs={['Desktop', 'Account', 'Submission']}
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

                    {/* New Account Button */}
                    {showNewAccountButton && (
                        <button onClick={handleNewAccountClick} className={styles.newAccountButton}>
                            New Account
                        </button>
                    )}

                    {/* New Submission Button */}
                    {showNewSubmissionButton && (
                        <button onClick={handleNewSubmissionClick} className={styles.newSubmissionButton}>
                            New Submission
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DesktopPage;

