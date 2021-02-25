import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Page from './Page';
import Projects from '../assets/projects.json';

function App() {

  const kebabCase = ( text: string ): string => {
    return text.toLowerCase().replaceAll( ' ', '-' )
  }

  const routes = Projects.map( ( project ) =>
    <Route
      key={ project._key }
      path={ "/" + kebabCase( project.title ) }
    >
      <Page
        content={ project.content }
        kebabCaseTitle={ kebabCase( project.title ) }
        title={ project.title }
      />
    </Route>
  );

  return (
    <div className="min-h-screen bg-gray-900 font-sans font-light text-lg text-gray-100 pt-12 pb-20 px-8 xl:pt-14">
      <Router>
        <Route path="/" exact>
          <Home projects={ Projects } kebabCase={ kebabCase } />
        </Route>
        { routes }
      </Router>
    </div>
  );

}

export default App;

