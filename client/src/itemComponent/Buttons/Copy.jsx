import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { AiOutlineCopy } from "react-icons/ai";
import "./copy.css"
function Copy() {
  const [show, setShow] = useState(false);
  const handleclick = () => {
    setShow(!show);
  };
  
  const reactCode = `
        <button classname = "ejs" > click </button>
  `;
  
  const cssCode = `
  button{
    color : wheat;
    background: black;
}
  `;  
  
  return (
    <div>
      <button onClick={handleclick}>click</button>
      {show && (
        <div className="code-space">
          <div className="code-area">
            <CopyToClipboard text={reactCode}>
              <header className="code-header">
                React
                <button className="copy-button">
                  <AiOutlineCopy />
                </button>
              </header>
            </CopyToClipboard>
            <SyntaxHighlighter language="jsx" style={darcula}>
              {reactCode}
            </SyntaxHighlighter>
          </div>
          <div className="code-area">
            <CopyToClipboard text={cssCode}>
              <header className="code-header">
                CSS
                <button className="copy-button">
                  <AiOutlineCopy />
                </button>
              </header>
            </CopyToClipboard>
            <SyntaxHighlighter language="css" style={darcula}>
              {cssCode}
            </SyntaxHighlighter>
          </div>
        </div>
      )}
    </div>
  );
}

export default Copy;

