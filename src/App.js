import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Projects from './components/Projects/Projects';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" render={() => <Main />} />
        <Route exact path="/projects" render={() => <Projects />} />
        <Route exact path="/work-experience" render={() => <WorkExperience />} />
        <Route exact path="/contact" render={() => <Contact />} />
      </Switch>
    </div>
  );
}

export default App;
