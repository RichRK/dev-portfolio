import React from 'react';
import Card from './Card';

function App() {

  const projects = [
    { key: "1", title: "Listing form" },
    { key: "2", title: "PID generator" },
    { key: "3", title: "Automated testing" },
    { key: "4", title: "Fetching data from Microsoft Dynamics" },
    { key: "5", title: "'Community Maps'" },
    { key: "6", title: "'Remember When' site" }
  ];

  const cards = projects.map( (project) =>
    <Card key={project.key} title={project.title} />
  );

  return (
    <div className="min-h-screen bg-gray-900 text-lg text-gray-50 flex flex-col justify-center items-center pt-4">
      <h1 className="font-bold text-5xl">Dev work</h1>
      <p>This is a collection of projects that I've worked on. Some big, some small — but all valuable experiences.</p>
      {cards}
    </div>
  );

}

export default App;

