export type HeadingItem = {
  type: "heading";
  content: string;
};

export type ParagraphsItem = {
  type: "paragraphs";
  content: string[];
};

export type BulletsItem = {
  type: "bullets";
  content: string[];
};

export type WriteupItem = HeadingItem | ParagraphsItem | BulletsItem;

export type Project = {
  title: string;
  language: string;
  repo: string;
  writeup: WriteupItem[];
};
