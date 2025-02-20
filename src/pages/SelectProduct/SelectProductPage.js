import React from 'react';
import styles from './SelectProductPage.module.css';

const SelectProductPage = () => {
    return (
        <div className={styles.selectProductContainer}>
            <h1>Select Product</h1>
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
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectProductPage;

