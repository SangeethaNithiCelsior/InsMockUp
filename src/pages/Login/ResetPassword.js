import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './ResetPassword.module.css';

const ResetPasswordPage = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleReset = () => {
        if (newPassword === confirmPassword) {
            alert('Password reset successful!');
            navigate('/login'); // Redirect to the Login page
        } else {
            alert('Passwords do not match!');
        }
    };

    return (
        <div className={styles.resetPasswordContainer}>
            <h1 className={styles.pageTitle}>Reset Password</h1>
            <div className={styles.resetPasswordForm}>
                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button
                    label="Reset Password"
                    onClick={handleReset}
                    variant="primary"
                    disabled={!newPassword || !confirmPassword}
                />
                <Button
                    label="Cancel"
                    onClick={() => navigate('/login')}
                    variant="secondary"
                />
            </div>
        </div>
    );
};

export default ResetPasswordPage;
