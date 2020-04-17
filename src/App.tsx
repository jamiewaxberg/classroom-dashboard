import * as React from 'react';
import './App.module.scss';
import MainNav from "./components/mainNav/MainNav";
import SideNav from "./components/sideNav/SideNav";
import {userContext} from "./context/UserContext";

const styles = require('./App.module.scss');


function App() {
  return (
      // <UserContext.Provider value={{displayName: 'Jamie', userType: 'student'}}/>
            <div className="App">
              <MainNav/>
              <div className={styles.contentWrapper}>
                  <SideNav/>
              </div>
            </div>
       // <UserContext.Provider/>
  );
}

export default App;
