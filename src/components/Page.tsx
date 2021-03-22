import React from 'react';
import Button from './Button';
import github from '../assets/github.png';

interface PageProps {

  content: {
    requirements?: Array<string | string[]> 
    process?: Array<string | string[]>
    challenges?: Array<string | string[]>
    future?: Array<string | string[]>
  }
  kebabCaseTitle: string
  repo: string
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
          { Array.isArray( paragraph ) ?
          <ul className="list-disc pl-5">
            { paragraph.map( ( bullet, i ) =>
              <li className="mb-8 last:mb-0 pl-1" key={ i }>
                { bullet }
              </li>
            ) }
          </ul> :
          <p className="col-start-1 col-span-full">
            { paragraph }
          </p> }
        </React.Fragment>
      ) }
    </React.Fragment>

  );

  return (

    <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto inset-x-0">
      <h1 className="font-bold text-5xl leading-tight mb-2">
        { props.title }
      </h1>
      <img
        alt=""
        className="mb-3 rounded-lg"
        src={ `${ process.env.PUBLIC_URL }/${ props.kebabCaseTitle }.png` }
      />
      <Button icon={ github } url={ props.repo }>Visit repo</Button>
      {
        contentExists ?
        content : 
        <p>I haven't got around to writing this project up just yet! Check back soon. 👀</p>
      }
    </div>

  );

}

export default Page;

