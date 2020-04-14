import * as React from 'react';
import {useState} from "react";

const styles = require('./MainNav.module.scss');

function MainNav() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen)
    }

    return (
        <div className={styles.wrapper}>
            <span>Classroom Dashboard</span>
            <div className={styles.rightSection} onClick={toggleMenu} data-testid="account-menu-icon">
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path d="M32.88,34.29c0-7.31-3.86-14-9.49-16.64a9.65,9.65,0,1,0-10.78,0C7,20.3,3.12,27,3.12,34.29a.66.66,0,0,0,0,.14.53.53,0,0,0,0,.13A1.45,1.45,0,0,0,4.56,36H31.44a1.45,1.45,0,0,0,1.44-1.44.53.53,0,0,0,0-.13A.61.61,0,0,0,32.88,34.29ZM18,19.31c6.19,0,11.47,6.15,12,13.81H6C6.53,25.46,11.81,19.31,18,19.31ZM11.23,9.65A6.77,6.77,0,1,1,18,16.43,6.78,6.78,0,0,1,11.23,9.65Z"/></svg>
            </div>
            <div className={isOpen ? `${styles.dropdown} ${styles.active}` : styles.dropdown} data-testid="account-menu">
                <ul>
                    <li>My account</li>
                </ul>
            </div>
        </div>
    );
}

export default MainNav;