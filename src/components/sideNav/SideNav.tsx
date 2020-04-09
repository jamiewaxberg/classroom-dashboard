import * as React from 'react';
import {useState} from "react";

const styles = require('./SideNav.module.scss');

export const navLinks : {id: number, text: string}[] = [
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
    const [activeTab, setActiveTab] = useState(1);

    function handleTabClick(id: number) {
        setActiveTab(id);

        return id;
    }

    return (
        <ul className={styles.wrapper}>
            {navLinks.map(navItem => <li
                key={navItem.id}
                className={activeTab === navItem.id ? `${styles.listItem} ${styles.active}` : styles.listItem}
                onClick={() => handleTabClick(navItem.id)}
                data-testid="tab"
            >
                {navItem.text}
            </li>)}
        </ul>
    );
}

export default SideNav;