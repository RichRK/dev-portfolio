import LanguageBadge from './LanguageBadge';

interface CardProps {

  kebabCaseTitle: string
  language: string
  title: string

}

function Card(props: CardProps){

  return (

    <div className="relative select-none bg-gray-200 rounded-xl text-gray-700 transition transform-gpu hover:scale-102">
      <img
        alt="Project banner, decorative only"
        className="rounded-t-lg"
        src={ `${ process.env.PUBLIC_URL }/${ props.kebabCaseTitle }.png` } 
      />
      <p className="p-5 font-bold">{ props.title }</p>
      <LanguageBadge language={ props.language } />
    </div>
    
  );

}

Card.defaultProps = { title: "Title" };

export default Card;

