import { Link } from 'react-router-dom';
import Card from './Card';

interface HomeProps {

  projects: Array< {
    content: {
        requirements?: Array<string | string[]>
        process?: Array<string | string[]>
        challenges?: Array<string | string[]>
        future?: Array<string | string[]>
    };
    language: string
    repo: string
    title: string
  } >
  kebabCase: Function

}

function Home( props: HomeProps ){

  const cards = props.projects.map( ( project, i ) =>
    <Link key={ i } to={ "/" + props.kebabCase( project.title ) }>
      <Card
        kebabCaseTitle={ props.kebabCase( project.title ) }
        language={ project.language }
        title={ project.title }
      />
    </Link>

  );

  return (

    <div className="md:px-4 lg:px-10 xl:px-16">
      <h1 className="text-5xl font-bold leading-tight mb-6 lg:mb-8">
        Development work
      </h1>
      <p className="mb-10 lg:mb-12 sm:w-2/3 lg:w-1/2">
        A selection of projects I've worked on — some big and some small, all full of their own challenges.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-8 md:gap-10 lg:gap-14 xl:gap-16">
        { cards }
      </div>
    </div>

  );

}

export default Home;

