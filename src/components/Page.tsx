import React from 'react';

function Page(props: any){

  const contentExists = Object.keys( props.content ).length;

  const content = Object.entries( props.content ).map( ( [ subheading, section ]: any ) =>
    <React.Fragment key={ subheading }>
      <h2 className="font-bold text-2xl capitalize">
        { subheading }
      </h2>
      { section.map( ( paragraph: string ) =>
        <p className="col-start-1 col-span-full mb-4 sm:w-2/3 lg:w-1/2 xl:mb-6">{ paragraph }</p>
      ) }
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

