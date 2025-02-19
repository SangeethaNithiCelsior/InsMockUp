import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CreateAccountPage.module.css';

const CreateAccountPage = () => {
    const navigate = useNavigate();

    // State to manage form fields
    const [formData, setFormData] = useState({
        organization: '',
        dateApplicationReceived: '',
        name: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        county: '',
        state: '',
        country: 'United States', // Non-editable
    });

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle Update button click
    const handleUpdate = () => {
        const { organization, dateApplicationReceived, name, addressLine1, city, county, state } = formData;
        if (!organization || !dateApplicationReceived || !name || !addressLine1 || !city || !county || !state) {
            alert('Please fill in all mandatory fields.');
            return;
        }
        alert('Account created successfully!');
        navigate('/desktop'); // Navigate back to the Desktop page
    };

    // Handle Cancel button click
    const handleCancel = () => {
        navigate('/desktop'); // Navigate back to the Desktop page
    };

    // List of US states for the dropdown
    const usStates = [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
        'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
        'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
        'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
    ];

    return (
        <div className={styles.createAccountContainer}>
            {/* Update and Cancel Buttons */}
            <div className={styles.buttonContainer}>
                <button onClick={handleUpdate} className={styles.updateButton}>
                    Update
                </button>
                <button onClick={handleCancel} className={styles.cancelButton}>
                    Cancel
                </button>
            </div>

            {/* Form */}
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label>Organization <span className={styles.mandatory}>*</span></label>
                    <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Enter organization name"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Date Application Received <span className={styles.mandatory}>*</span></label>
                    <input
                        type="date"
                        name="dateApplicationReceived"
                        value={formData.dateApplicationReceived}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Name <span className={styles.mandatory}>*</span></label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter name"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Address Line 1 <span className={styles.mandatory}>*</span></label>
                    <input
                        type="text"
                        name="addressLine1"
                        value={formData.addressLine1}
                        onChange={handleChange}
                        placeholder="Enter address line 1"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Address Line 2</label>
                    <input
                        type="text"
                        name="addressLine2"
                        value={formData.addressLine2}
                        onChange={handleChange}
                        placeholder="Enter address line 2"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>City <span className={styles.mandatory}>*</span></label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Enter city"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>County <span className={styles.mandatory}>*</span></label>
                    <input
                        type="text"
                        name="county"
                        value={formData.county}
                        onChange={handleChange}
                        placeholder="Enter county"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>State <span className={styles.mandatory}>*</span></label>
                    <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                    >
                        <option value="">Select a state</option>
                        {usStates.map((state) => (
                            <option key={state} value={state}>
                                {state}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label>Country</label>
                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        readOnly // Non-editable
                    />
                </div>
            </form>
        </div>
    );
};

export default CreateAccountPage;
