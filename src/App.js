import React from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route, Link } from "react-router-dom";

import Card from './components/Card'
import {lightTheme, darkTheme} from './Dark theme/cardTheme';

import Asem from './components/Asem';
import Main from './components/Main';
import Achievements from './components/Achievements';
import Footer from './components/Footer';





function App(){
   const [background, setBackground] = React.useState(lightTheme);
  function themeHandler(){
    setBackground(background.theme === "light" ? darkTheme : lightTheme);

  }
  const colSize = 6
  return (
    <Router>
      <React.Fragment>
      <Header /> 
        <Switch>

        <Route exact path="/">
        <div className="container">
            <div clasName="row">
              <div className={`col-md-${colSize}`}>
              <Card background={background} themeHandler={themeHandler}/>
              </div>
            </div>
          </div>
          <Main  />
          </Route>
          
          <Route  path="/Asem" >
          <Asem/>
          </Route>

          
          <Route  path="/Achievements" >
          <Achievements/>
          </Route>
        </Switch>
        
        

       <Footer/>
      </React.Fragment>
    </Router>

  );
}

export default App;
