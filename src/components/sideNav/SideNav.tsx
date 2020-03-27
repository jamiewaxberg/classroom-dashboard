import React from "react";
import styles from "./SideNav.module.scss"

const navLinks = [
    {
        id: 1,
        text: 'Daily Bulletin'
    },
    {
        id: 2,
        text: 'Watch Lesson'
    },
    {
        id: 3,
        text: 'Q&A Board'
    },
    {
        id: 4,
        text: 'Grades Dashboard'
    }
]

function SideNav() {
    return (
        <ul className={styles.wrapper}>
            {navLinks.map(navItem => <li key={navItem.id}>{navItem.text}</li>)}
        </ul>
    );
}

export default SideNav;