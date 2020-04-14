import * as React from 'react';
import {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const styles = require('./SideNav.module.scss');

export const navLinks : {id: number, text: string, path: string}[] = [
    {
        id: 1,
        text: 'Daily Bulletin',
        path: '/bulletin'
    },
    {
        id: 2,
        text: 'Watch Lesson',
        path: '/watch'
    },
    {
        id: 3,
        text: 'Q&A Board',
        path: '/q-and-a'
    },
    {
        id: 4,
        text: 'Grades Dashboard',
        path: '/grades'
    }
]

function SideNav() {
    const [activeTab, setActiveTab] = useState(navLinks[0].path);

    useEffect(() => {
        const currentUrlPath = window.location.pathname
        if (currentUrlPath !== activeTab) {
            setActiveTab(currentUrlPath)
        }
    })

    function handleTabClick(path: string) {
        setActiveTab(path);
    }

    return (
        <Router>
            <ul className={styles.wrapper}>
                {navLinks.map(navItem => <Link to={navItem.path} key={navItem.id}><li
                    className={activeTab === navItem.path ? `${styles.listItem} ${styles.active}` : styles.listItem}
                    onClick={() => handleTabClick(navItem.path)}
                    data-testid="tab"
                >
                    {navItem.text}
                </li></Link>)}
            </ul>
        </Router>
    );
}

export default SideNav;