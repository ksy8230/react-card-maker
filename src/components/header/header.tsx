import React from 'react';
import styles from './header.module.css';

type PropTypes = {
    onLogout?: () => void;
}
const Header = ({onLogout}:PropTypes) => {
    return (
        <div className={styles.header}>
            {onLogout && (
            <button className={styles.logout} onClick={onLogout}>
                Logout
            </button>
            )}
        </div>
    );
};

export default Header;