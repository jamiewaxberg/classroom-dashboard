import * as React from 'react';
import './App.scss';
import * as styles from "./App.scss"
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
