import LanguageBadge from "./LanguageBadge";

interface CardProps {
  kebabCaseTitle: string;
  language: string;
  title: string;
}

function Card(props: CardProps) {
  return (
    <a href={`/${props.kebabCaseTitle}`} className="block">
      <div className="relative select-none bg-gray-200 rounded-xl text-gray-700 transition transform-gpu hover:scale-102">
        <img
          alt="Project banner, decorative only"
          className="rounded-t-lg w-full"
          src={`/${props.kebabCaseTitle}.png`}
        />
        <p className="p-5 font-bold">{props.title}</p>
        <LanguageBadge language={props.language} />
      </div>
    </a>
  );
}

Card.defaultProps = { title: "Title" };

export default Card;
