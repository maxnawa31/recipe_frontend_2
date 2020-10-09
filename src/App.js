import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { createEditor, Editor, Transforms } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { initialValue, Leaf, MarkButton } from './meta';
import './App.css';

const CodeElement = (props) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

const DefaultElement = (props) => {
  return <p {...props.attributes}>{props.children}</p>;
};

const UnOrderedListElement = (props) => {
  return <ul {...props.attributes}>{props.children}</ul>;
};

const ListItemElement = (props) => {
  return <li {...props.attributes}>{props.children}</li>;
};

function App() {
  const editor = useMemo(() => withReact(createEditor()), []);

  const [value, setValue] = useState(initialValue);
  const seeValue = (value) => {
    console.log(value);
    setValue(value);
  };



  const Element = ({ attributes, children, element }) => {
    console.log(element, "ELEMENT")
    switch (element.type) {
      case 'block-quote':
        return <blockquote {...attributes}>{children}</blockquote>;
      case 'bulleted-list':
        return <ul {...attributes}>{children}</ul>;
      case 'heading-one':
        return <h1 {...attributes}>{children}</h1>;
      case 'heading-two':
        return <h2 {...attributes}>{children}</h2>;
      case 'list-item':
        return <li {...attributes}>{children}</li>;
      case 'numbered-list':
        return <ol {...attributes}>{children}</ol>;
      default:
        return <p {...attributes}>{children}</p>;
    }
  };

  const renderElement = useCallback((props) => <Element {...props} />, []);
  // const renderElement = useCallback((props) => {
  //   switch (props.element.type) {
  //     case 'code':
  //       return <CodeElement {...props} />;
  //     case 'ul':
  //       return <UnOrderedListElement {...props} />;
  //     case 'li':
  //       return <ListItemElement {...props} />;
  //     default:
  //       return <DefaultElement {...props} />;
  //   }
  // }, []);

  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue) => seeValue(newValue)}
    >
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={(event) => {
          if (event.key === '`' && event.ctrlKey) {
            // Prevent the "`" from being inserted by default.
            event.preventDefault();
            // Otherwise, set the currently selected blocks type to "code".
            // console.log(Editor.nodes(editor), "NODES HERE")
            const [match] = Editor.nodes(editor, {
              match: (n) => {
                console.log(n, 'NODE');
                return n.type === 'code';
              },
            });

            Transforms.setNodes(
              editor,
              { type: match ? 'paragraph' : 'code' },
              { match: (n) => Editor.isBlock(editor, n) }
            );
          }
        }}
      />
    </Slate>
  );
}

export default App;
