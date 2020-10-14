import React from "react";
import { Editor } from "slate";
import { useSlate } from "slate-react";
import { StyledIcon } from "./styles";

const Button = React.forwardRef(
  ({ className, active, reversed, ...props }, ref) => (
    <span reversed={reversed} active={active} {...props} ref={ref} />
  )
);

export const MarkButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <Icon icon={icon} />
    </Button>
  );
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

export const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

export const Icon = React.forwardRef(({ className, ...props }, ref) => (
  <StyledIcon />
));
