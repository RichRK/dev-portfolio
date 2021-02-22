import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Page from './Page';
import Projects from '../assets/projects.json';

function App() {

  const titleAsUrl = ( title: string ): string => {
    return title.toLowerCase().replaceAll( ' ', '-' )
  }

  const routes = Projects.map( ( project ) =>
    <Route key={ project._key } path={ "/" + titleAsUrl( project.title ) }>
      <Page title={ project.title } content={ project.content } />
    </Route>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-lg text-gray-100 p-8 xl:px-20 xl:py-14">
      <Router>
        <Route path="/" exact>
          <Home projects={ Projects } titleAsUrl={ titleAsUrl } />
        </Route>
        { routes }
      </Router>
    </div>
  );

}

export default App;

