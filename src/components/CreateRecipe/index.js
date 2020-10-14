import React, { useEffect, useMemo, useState, useCallback } from "react";
import { createEditor, Editor, Transforms, Node } from "slate";
import { Slate, Editable, withReact, useSlate } from "slate-react";
import { connect } from "react-redux";
import Toolbar from "../Toolbar";
import {
  recipesSubmitRecipe,
  recipesGetFetchedRecipes,
} from "../../actions/recipes/api";
import isHotkey from "is-hotkey";
import {
  StyledEditable,
  Button,
  Container,
  Heading,
  InnerContainer,
  SubmitButton,
} from "./styles";
import Icon from "react-icons-kit";
import { ic_format_bold as bold } from "react-icons-kit/md/ic_format_bold";
import { ic_format_italic as italic } from "react-icons-kit/md/ic_format_italic";
import { ic_format_underlined as underline } from "react-icons-kit/md/ic_format_underlined";
import { ic_format_quote as quote } from "react-icons-kit/md/ic_format_quote";
import { ic_looks_one as headingOne } from "react-icons-kit/md/ic_looks_one";
import { ic_looks_two as headingTwo } from "react-icons-kit/md/ic_looks_two";
import { ic_format_list_bulleted as bulletedList } from "react-icons-kit/md/ic_format_list_bulleted";
import { ic_format_list_numbered as numberedList } from "react-icons-kit/md/ic_format_list_numbered";

const CreateRecipe = (props) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "Start typing here" }],
    },
  ]);
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const content = JSON.stringify(value);
    console.log(content);
    const { submitNewRecipe } = props;
    submitNewRecipe({ body: content, title: "new recipe", tag_list: [] });
  };
  const ButtonsConfig = [
    {
      format: "bold",
      icon: bold,
      toggleFn: toggleMark,
    },
    {
      format: "italic",
      icon: italic,
      toggleFn: toggleMark,
    },
    {
      format: "underline",
      icon: underline,
      toggleFn: toggleMark,
    },
    {
      format: "block-quote",
      icon: quote,
      toggleFn: toggleBlock,
    },
    {
      format: "heading-one",
      icon: headingOne,
      toggleFn: toggleBlock,
    },
    {
      format: "heading-two",
      icon: headingTwo,
      toggleFn: toggleBlock,
    },
  ];

  return (
    <Container>
      <InnerContainer>
        <Heading>Post a new recipe.</Heading>
        <Slate
          editor={editor}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        >
          <StyledEditable
            autoFocus
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            onKeyDown={(event) => {
              for (const hotkey in HOTKEYS) {
                if (isHotkey(hotkey, event)) {
                  event.preventDefault();
                  const mark = HOTKEYS[hotkey];
                  toggleMark(editor, mark);
                }
              }
            }}
          />
          <Toolbar>
            <FormatButton
              format="bold"
              icon={bold}
              toggleFn={toggleMark}
              isActiveFn={isMarkActive}
            />
            <FormatButton
              format="italic"
              icon={italic}
              toggleFn={toggleMark}
              isActiveFn={isMarkActive}
            />
            <FormatButton
              format="underline"
              icon={underline}
              toggleFn={toggleMark}
              isActiveFn={isMarkActive}
            />
            <FormatButton
              format="block-quote"
              icon={quote}
              toggleFn={toggleBlock}
              isActiveFn={isBlockActive}
            />
            <FormatButton
              format="heading-one"
              icon={headingOne}
              toggleFn={toggleBlock}
              isActiveFn={isBlockActive}
            />
            <FormatButton
              format="heading-two"
              icon={headingTwo}
              toggleFn={toggleBlock}
              isActiveFn={isBlockActive}
            />
            <FormatButton
              format="bulleted-list"
              icon={bulletedList}
              toggleFn={toggleBlock}
              isActiveFn={isBlockActive}
            />
            <FormatButton
              format="numbered-list"
              icon={numberedList}
              toggleFn={toggleBlock}
              isActiveFn={isBlockActive}
            />
            <SubmitButton onClick={handleSubmit}>POST</SubmitButton>
          </Toolbar>
        </Slate>
      </InnerContainer>
    </Container>
  );
};

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case "block-quote":
      return <blockquote {...attributes}>{children}</blockquote>;
    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>;
    case "heading-one":
      return <h1 {...attributes}>{children}</h1>;
    case "heading-two":
      return <h2 {...attributes}>{children}</h2>;
    case "list-item":
      return <li {...attributes}>{children}</li>;
    case "numbered-list":
      return <ol {...attributes}>{children}</ol>;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};

const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
};

const LIST_TYPES = ["numbered-list", "bulleted-list"];

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format);
  console.log(isActive, "IS_ACTIVE");
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) => LIST_TYPES.includes(n.type),
    split: true,
  });

  Transforms.setNodes(editor, {
    type: isActive ? "paragraph" : isList ? "list-item" : format,
  });

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);
  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => n.type === format,
  });

  console.log(match);
  return !!match;
};

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const FormatButton = ({ format, icon, toggleFn, isActiveFn }) => {
  const editor = useSlate();
  return (
    <Button
      active={isActiveFn(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleFn(editor, format);
      }}
    >
      <Icon size={24} icon={icon} />
    </Button>
  );
};

const mapDispatchToProps = {
  submitNewRecipe: recipesSubmitRecipe,
};

export default connect(null, mapDispatchToProps)(CreateRecipe);
