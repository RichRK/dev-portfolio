import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Page from './Page';

function App() {

  const projects = [
    { key: "1", title: "Listing form" },
    { key: "2", title: "PID generator" },
    { key: "3", title: "Automated testing" },
    { key: "4", title: "Data from Microsoft Dynamics" },
    { key: "5", title: "Community Maps" },
    { key: "6", title: "Remember When" }
  ];

  const routes = projects.map( ( project ) =>
    <Route
      key={ project.key }
      path={ "/" + project.key }
      render={ () => <Page title={ project.title } /> }
    />
  );

  return (
    <div className="min-h-screen bg-gray-900 text-lg text-gray-100 p-8 xl:px-20 xl:py-14">
      <Router>
        <Route
          path="/"
          exact
          render={ () => <Home projects={projects} /> }
        />
        { routes }
      </Router>
    </div>
  );

}

export default App;

