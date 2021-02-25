import { Link } from 'react-router-dom';
import Card from './Card';

interface HomeProps {
  projects: Array< {
    _key: number
    content: {
        requirements?: Array<string | string[]>
        process?: Array<string | string[]>
        challenges?: Array<string | string[]>
        future?: Array<string | string[]>
    };
    language: string
    title: string
  } >
  kebabCase: Function
}

function Home( props: HomeProps ){

  const cards = props.projects.map( ( project ) =>
    <Link key={ project._key } to={ "/" + props.kebabCase( project.title ) }>
      <Card
        language={ project.language }
        title={ project.title }
      />
    </Link>
  );

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:px-20">
      <h1 className="col-span-full text-5xl font-bold">
        Development work
      </h1>
      <p className="col-span-full mb-4 sm:w-2/3 lg:w-1/2 xl:mb-6">
        A selection of projects I've worked on — some big and some small, all full of their own challenges.
      </p>
      { cards }
    </div>
  );

}

export default Home;

