import React from 'react';

interface PageProps {
  content: {
    requirements?: Array<string | string[]> 
    process?: Array<string | string[]>
    challenges?: Array<string | string[]>
    future?: Array<string | string[]>
  }
  kebabCaseTitle: string
  title: string
}

function Page(props: PageProps){

  // Necessary as some pages have no content yet.
  const contentExists = Object.keys( props.content ).length;

  const content = Object.entries( props.content ).map( ([ heading, text ]) =>
    <React.Fragment key={ heading }>
      <h2 className="font-medium text-2xl capitalize">
        { heading }
      </h2>
      { text?.map( ( paragraph, i ) =>
        <React.Fragment key={ i }>
          { Array.isArray( paragraph ) ? <ul>
            { paragraph.map( ( bullet, i ) =>
                <li key={ i }>
                  { bullet }
                </li>
            ) }
          </ul> :
          <p className="col-start-1 col-span-full mb-4 sm:w-2/3 lg:w-1/2 xl:mb-6">
            { paragraph }
          </p> }
        </React.Fragment>
      ) }
    </React.Fragment>
  );

  return (
    <div className="grid grid-cols-1 gap-8">
      <h1 className="font-medium text-5xl">{ props.title }</h1>
      <img
        alt=""
        src={ `${ process.env.PUBLIC_URL }/${ props.kebabCaseTitle }.png` } 
      />
      { contentExists ? content : <p>Nothing to show here yet. 👻</p> }
    </div>
  );

}

export default Page;

