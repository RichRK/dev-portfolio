import LanguageBadge from './LanguageBadge';
import logo from '../assets/logo.svg';

interface CardProps {
  language: string
  title: string
}

function Card(props: CardProps){

  return (
    <div className="relative bg-gray-200 rounded-lg text-gray-700">
      <img src={ logo } alt="Screenshot of the project" />
      <p className="p-5 font-bold">{ props.title }</p>
      <LanguageBadge language={ props.language } />
    </div>
  );

}

Card.defaultProps = { title: "Title" };

export default Card;

