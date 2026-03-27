import LanguageBadge from "./LanguageBadge";
import { css } from "../../styled-system/css";

interface CardProps {
  kebabCaseTitle: string;
  language: string;
  title: string;
}

const linkStyles = css({
  d: "block",
});

const cardStyles = css({
  pos: "relative",
  userSelect: "none",
  bg: "gray.200",
  rounded: "xl",
  color: "gray.700",
  transition: "transform 0.2s ease-in-out",
  transform: "translateZ(0)",
  _hover: {
    transform: "scale(1.02)",
  },
});

const imageStyles = css({
  roundedTop: "lg",
  w: "100%",
});

const titleStyles = css({
  p: "5",
  fontWeight: "bold",
});

function Card(props: CardProps) {
  return (
    <a className={linkStyles} href={`/${props.kebabCaseTitle}`}>
      <div className={cardStyles}>
        <img
          className={imageStyles}
          alt="Project banner, decorative only"
          src={`/${props.kebabCaseTitle}.png`}
        />
        <p className={titleStyles}>{props.title}</p>
        <LanguageBadge language={props.language} />
      </div>
    </a>
  );
}

Card.defaultProps = { title: "Title" };

export default Card;
