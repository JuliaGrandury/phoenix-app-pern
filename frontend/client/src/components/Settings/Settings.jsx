import React from 'react'
import styles from './Settings.module.css'

const Settings = () => {
    return (
        <div className={styles.PageContainer}>
            <h1>Your Account Settings</h1>
            <h2>Name</h2>
            <h2>Username</h2>
            <h2>Email</h2>
            <h2>Email Settings</h2>
            <h2>Granted Accesses</h2>
        </div>
    )
}

export default Settings