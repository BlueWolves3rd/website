import { ReactNode } from "react";
import "./markdownStyle.css";

export const MarkdownStyle = (props: { children: ReactNode }) => {
  return (
    <div className="markdown-body min-h-screen max-w-3xl pt-12 font-metropolis-semibold">
      {props.children}
    </div>
  );
};
