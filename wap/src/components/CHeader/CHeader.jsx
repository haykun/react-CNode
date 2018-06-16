import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './CHeader.css';

const CHeader = () => {
    return (
        <div className={styles.header}>
            <NavLink exact to="/"  className={styles.headerNav} activeClassName={styles.active}>全部</NavLink>
            <NavLink exact to="/good" className={styles.headerNav} activeClassName={styles.active}>精华</NavLink>
            <NavLink exact to="/share" className={styles.headerNav} activeClassName={styles.active}>分享</NavLink>
            <NavLink exact to="/ask" className={styles.headerNav} activeClassName={styles.active}>问答</NavLink>
            <NavLink exact to="/dev" className={styles.headerNav} activeClassName={styles.active}>测试</NavLink>
            <NavLink exact to="/job" className={styles.headerNav} activeClassName={styles.active}>招聘</NavLink>
        </div>
    )
}

export default CHeader