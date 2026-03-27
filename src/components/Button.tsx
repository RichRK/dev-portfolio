import { css } from "../../styled-system/css";

export interface ButtonProps {
  children: string;
  icon?: string;
  url: string;
}

const linkStyles = css({
  width: "max-content",
  mb: "3",
});

const buttonStyles = css({
  width: "max-content",
  borderRadius: "md",
  px: "4",
  pt: "2",
  pb: "1",
  borderWidth: "2px",
  borderColor: "gray.700",
  _focus: {
    outline: "none",
    ringWidth: "4px",
    ringColor: "gray.700",
  },
});

const iconStyles = css({
  display: "inline",
  opacity: 0.8,
  ml: "3",
  mb: "1",
});

function Button(props: ButtonProps) {
  return (
    <a className={linkStyles} href={props.url} rel="noreferrer" target="_blank">
      <button className={buttonStyles}>
        {props.children}
        {props.icon ? (
          <img className={iconStyles} alt="GitHub logo" src={props.icon} />
        ) : null}
      </button>
    </a>
  );
}

export default Button;
