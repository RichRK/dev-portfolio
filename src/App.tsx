import React from 'react';
import Card from './Card';

function App() {

  const projects = [
    { key: "1", title: "Listing form" },
    { key: "2", title: "PID generator" },
    { key: "3", title: "Automated testing" },
    { key: "4", title: "Data from Microsoft Dynamics" },
    { key: "5", title: "Community Maps" },
    { key: "6", title: "Remember When" }
  ];

  const cards = projects.map( (project) =>
    <Card key={project.key} title={project.title} />
  );

  return (
    <div className="grid grid-cols-1 gap-8 p-8 min-h-screen bg-gray-900 text-lg text-gray-100 sm:grid-cols-2 lg:grid-cols-3 xl:px-20 xl:py-14">
      <h1 className="font-bold text-5xl">Dev work</h1>
      <p className="col-start-1 col-span-full mb-4 sm:w-2/3 lg:w-1/2 xl:mb-6">A selection of projects I've worked on — some big and some small, all full of their own challenges.</p>
      { cards }
    </div>
  );

}

export default App;

