import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import styles from './NewSubmissionsPage.module.css';

const NewSubmissionsPage = () => {
    const [activeTopTab, setActiveTopTab] = useState('Submission');
    const navigate = useNavigate();

    const handleTopTabClick = (tab) => {
        setActiveTopTab(tab);
        if (tab === 'Desktop') {
            navigate('/desktop'); // Navigate to the Desktop page
        } else if (tab === 'Account') {
            navigate('/create-account'); // Navigate to the Create Account page
        }
    };

    const handleLogout = () => {
        alert('You have been logged out.');
        navigate('/'); // Redirect to the Login Page
    };

    return (
        <div className={styles.newSubmissionsContainer}>
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

            {/* Page Content */}
            <div className={styles.pageContent}>
                <h1 className={styles.pageTitle}>New Submissions</h1>
                <p>Please select a product to proceed with your submission.</p>

                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product Name</th>
                                <th>Product Description</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><button className={styles.selectButton}>Select</button></td>
                                <td>Commercial Property</td>
                                <td>Commercial Property</td>
                                <td>Available</td>
                            </tr>
                            <tr>
                                <td><button className={styles.selectButton}>Select</button></td>
                                <td>General Liability</td>
                                <td>General Liability</td>
                                <td>Available</td>
                            </tr>
                            <tr>
                                <td><button className={styles.selectButton}>Select</button></td>
                                <td>Cyber</td>
                                <td>Cyber</td>
                                <td>Available</td>
                            </tr>
                            {/* New Rows */}
                            <tr>
                                <td><button className={styles.selectButton}>Select</button></td>
                                <td>Inland Marine</td>
                                <td>Inland Marine</td>
                                <td>Available</td>
                            </tr>
                            <tr>
                                <td><button className={styles.selectButton}>Select</button></td>
                                <td>Workers' Compensation</td>
                                <td>Workers' Compensation</td>
                                <td>Available</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default NewSubmissionsPage;


