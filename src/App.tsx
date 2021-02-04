import React from 'react';
import Card from './Card'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-lg text-gray-50 flex flex-col justify-center items-center pt-4">
      <h1 className="font-bold text-5xl">Dev work</h1>
      <p>This is a collection of projects that I've worked on. Some big, some small — but all valuable experiences.</p>
      <Card title="Listing form" />
      <Card title="PID generator" />
      <Card title="Automated testing" />
      <Card title="Fetching data from Microsoft Dynamics" />
      <Card title="'Community Maps'" />
      <Card title="'Remember When' site" />
    </div>
  );
}

export default App;

