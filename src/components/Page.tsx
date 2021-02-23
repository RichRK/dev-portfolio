import React from 'react';

interface PageProps {
  content: {
    requirements?: string[]
    process?: string[]
    challenges?: string[]
    future?: string[]
  }
  title: string
}

function Page(props: PageProps){

  const contentExists = Object.keys( props.content ).length;

  const content = Object.entries( props.content ).map( ([ heading, text ]) =>
    <React.Fragment key={ heading }>
      <h2 className="font-bold text-2xl capitalize">
        { heading }
      </h2>
      { text?.map( ( paragraph, index ) =>
        <p key={ index } className="col-start-1 col-span-full mb-4 sm:w-2/3 lg:w-1/2 xl:mb-6">
          { paragraph }
        </p>
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

