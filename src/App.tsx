import React from 'react';
import Card from './Card';

function App() {

  const titles = [ "Listing form", "PID generator", "Automated testing", "Fetching data from Microsoft Dynamics", "'Community Maps'", "'Remember When' site" ];

  const cards = titles.map( (title) =>
    <Card key={title} title={title} />
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

