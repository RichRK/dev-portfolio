import React from 'react';

function Page(props: any){

  const contentExists = Object.keys( props.content ).length;

  const content = Object.entries( props.content ).map( ( [ key, text ]: any ) =>
    <React.Fragment key={ key }>
      <h2 className="font-bold text-2xl capitalize">{ key }</h2>
      <p className="col-start-1 col-span-full mb-4 sm:w-2/3 lg:w-1/2 xl:mb-6">{ text }</p>
    </React.Fragment>
  );

  return (
    <div className="grid grid-cols-1 gap-8">
      <h1 className="font-bold text-5xl">{ props.title }</h1>
      { contentExists ? content : <p>Nothing to show here yet. 👻</p> }
    </div>
  );

}

export default Page;

