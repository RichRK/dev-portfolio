import { css } from "../../styled-system/css";

export interface LanguageBadgeProps {
  language: string;
}

const styles = css({
  position: "absolute",
  top: "4",
  right: "4",
  bg: "black",
  fontWeight: "medium",
  color: "gray.100",
  borderRadius: "md",
  px: "2",
  pt: "2",
  pb: "2",
  fontSize: "sm",
  lineHeight: "none"
});

function LanguageBadge(props: LanguageBadgeProps) {
  return <div className={styles}>{props.language}</div>;
}

export default LanguageBadge;
