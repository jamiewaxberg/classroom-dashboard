import * as React from 'react';
import * as styles from './SideNav.scss'

const navLinks : {id: number, text: string}[] = [
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