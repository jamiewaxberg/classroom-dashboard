import React from 'react';
import './App.module.scss';
import styles from "./App.module.scss"
import MainNav from "./components/mainNav/MainNav";
import SideNav from "./components/sideNav/SideNav";

function App() {
  return (
    <div className="App">
      <MainNav/>
      <div className={styles.contentWrapper}>
          <SideNav/>
      </div>
    </div>
  );
}

export default App;
