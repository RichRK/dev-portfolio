import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Page from './Page';
import ScrollToTop from './ScrollToTop';

import Projects from '../assets/projects.json';

function App() {

  const kebabCase = ( text: string ): string => {

    return text.toLowerCase().replaceAll( ' ', '-' )

  }

  const routes = Projects.map( ( project, i ) =>

    <Route
      key={ i }
      path={ "/" + kebabCase( project.title ) }
    >
      <Page
        kebabCaseTitle={ kebabCase( project.title ) }
        repo={ project.repo }
        title={ project.title }
        writeup={ project.writeup }
      />
    </Route>

  );

  return (

    <div className="min-h-screen bg-gray-900 font-sans font-light text-lg text-gray-100 pt-10 md:pt-12 lg:pt-14 pb-20 px-8">
      <Router>
        <ScrollToTop />
        <Route path="/" exact>
          <Home projects={ Projects } kebabCase={ kebabCase } />
        </Route>
        { routes }
      </Router>
    </div>
    
  );

}

export default App;

