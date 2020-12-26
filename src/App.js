import { useState, useEffect } from 'react';
import { useDebounce } from './utils/useDebounce';

import './App.css';
import SplitPane from 'react-split-pane';
import {
  JavaScriptEditor,
  HtmlEditor,
  CssEditor,
} from './components/Editors/Editors';

function App() {
  const [heightvalue, setHeightvalue] = useState('485px');

  const [htmlValue, setHtmlValue] = useState('');
  const [jsValue, setJsValue] = useState('');
  const [cssValue, setCssValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  // Set the debounced Values so no matter if the state of the editor changes the value gets updated only after 1000s delay
  const debouncedHtml = useDebounce(htmlValue, 1000);
  const debouncedJs = useDebounce(jsValue, 1000);
  const debouncedCss = useDebounce(cssValue, 1000);

  // Whenever the html or css or js changes then use useEffect to generate a new preview of preview Page
  useEffect(() => {
    const output = `<html>
    <style>
    ${debouncedCss}
    </style>
    <body>
    ${debouncedHtml}
    <script type = 'text/javascript'>
    ${debouncedJs}
    </script>
    </body>
    </html>`;

    // Set the output
    setOutputValue(output);
  }, [htmlValue, cssValue, jsValue]);

  return (
    <SplitPane
      split='horizontal'
      minSize={'50%'}
      onDragFinished={(height) => {
        setHeightvalue(`${height - 40}px`);
      }}
    >
      <SplitPane split='vertical' minSize={'33%'}>
        <HtmlEditor height={heightvalue} onChange={setHtmlValue} />
        <SplitPane split='vertical' minSize={'50%'}>
          <CssEditor height={heightvalue} onChange={setCssValue} />
          <JavaScriptEditor height={heightvalue} onChange={setJsValue} />
        </SplitPane>
      </SplitPane>
      <iframe srcDoc={outputValue} className='previewIframe'></iframe>
    </SplitPane>
  );
}

export default App;
