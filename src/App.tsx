import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Page from './Page';

function App() {

  const projects = [
    { key: "1", title: "Listing form", language: "Vue" },
    { key: "2", title: "PID generator", language: "C#" },
    { key: "3", title: "Automated testing", language: "Python" },
    { key: "4", title: "Data from Microsoft Dynamics", language: "C#" },
    { key: "5", title: "Community Maps", language: "jQuery" },
    { key: "6", title: "Remember When", language: "jQuery" }
  ];

  const titleAsUrl = ( title: string ): string => {
    return title.toLowerCase().replaceAll( ' ', '-' )
  }

  const routes = projects.map( ( project ) =>
    <Route key={ project.key } path={ "/" + titleAsUrl( project.title ) }>
      <Page title={ project.title } />
    </Route>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-lg text-gray-100 p-8 xl:px-20 xl:py-14">
      <Router>
        <Route path="/" exact>
          <Home projects={projects} titleAsUrl={ titleAsUrl } />
        </Route>
        { routes }
      </Router>
    </div>
  );

}

export default App;

