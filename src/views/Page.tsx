import React from 'react';
import { PageProps } from '../types'
import github from '../assets/github.png';

import Button from '../components/Button';

function Page(props: PageProps){

  // Some pages have no content yet.
  const writeupExists = props.writeup.length;

  const writeup = props.writeup.map(( item, i ) => {

    if ( item.type === "heading" ) {
      return <h2 key={ i } className="font-medium text-2xl">{ item.content }</h2>
    }

    if ( Array.isArray( item.content )) {
      if ( item.type === "paragraphs" ) {
        return item.content.map(( paragraph, i ) => {
          return <p key={ i } className="col-start-1 col-span-full">{ paragraph }</p>
        })
      }
      else {
        return <ul key={ i } className="list-disc pl-5">{ item.content.map(( bullet, i ) => {
          return <li key={ i } className="mb-8 last:mb-0 pl-1">{ bullet }</li>
        }) }</ul>
      }
    }
    else { return <></>}
  });

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
        writeupExists ?
        writeup : 
        <p>I haven't got around to writing this project up just yet! Check back soon. 👀</p>
      }
    </div>

  );

}

export default Page;

