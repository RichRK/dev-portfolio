import { Link } from 'react-router-dom';
import Card from './Card';

interface HomeProps {
  projects: Array< {
    _key: number
    content: {
        requirements?: Array< string | Array<string> >
        process?: Array< string | Array<string> >
        challenges?: Array< string | Array<string> >
        future?: Array< string | Array<string> >
    };
    language: string
    title: string
  } >
  titleAsUrl: Function
}

function Home( props: HomeProps ){

  const cards = props.projects.map( ( project ) =>
    <Link key={ project._key } to={ "/" + props.titleAsUrl( project.title ) }>
      <Card
        language={ project.language }
        title={ project.title }
      />
    </Link>
  );

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <h1 className="font-bold text-5xl">Dev work</h1>
      <p className="col-start-1 col-span-full mb-4 sm:w-2/3 lg:w-1/2 xl:mb-6">A selection of projects I've worked on — some big and some small, all full of their own challenges.</p>
      { cards }
    </div>
  );

}

export default Home;

