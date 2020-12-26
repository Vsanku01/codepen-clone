import React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-monokai';

import './editors.css';

export const JavaScriptEditor = (props) => {
  return <Editor mode='javascript' title={'Javascript'} {...props} />;
};

export const HtmlEditor = (props) => {
  return <Editor mode='html' title={'HTML'} {...props} />;
};

export const CssEditor = (props) => {
  return <Editor mode='css' title={'CSS'} {...props} />;
};

const Editor = ({ mode, title, height, onChange }) => {
  return (
    <div className='editorContainer'>
      <div className='editorTitle'>{title}</div>
      {/* Ace Editor */}
      <AceEditor
        mode={mode}
        theme='monokai'
        name={title}
        onChange={onChange}
        fontSize={18}
        width={'100%'}
        showPrintMargin={true}
        showGutter={true}
        tabSize={2}
        height={height}
        setOption={{ useWorker: false }}
      />
    </div>
  );
};
