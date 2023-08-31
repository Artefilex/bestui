import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { AiOutlineCopy } from "react-icons/ai";
import "./copy.css";
function Copy({ cssCode, isActive}) {
  // const [show, setShow] = useState(false);
  // const handleclick = () => {
  //   console.log(id)
  //   setShow((prevShow) => !prevShow);
  // };
  return (
    <div className="Copy-container flex">
      {/* <button className={cssClass} onClick={handleclick} >
        click
      </button> */}
      {isActive &&   (
        <div className="code-space flex">
          <div className="code-area flex">
            <header className="code-header flex">
                <span>Code</span>
              <CopyToClipboard text={cssCode.react}>
                <button className="copy-button">
                  <AiOutlineCopy />
                </button>
              </CopyToClipboard>
            </header>

            <SyntaxHighlighter language="jsx" style={darcula}>
              {cssCode.react}
            </SyntaxHighlighter>
          </div>
          <div className="code-area flex">
            <header className="code-header flex">
             <span>CSS</span>
              <CopyToClipboard text={cssCode.css}>
                <button className="copy-button">
                  <AiOutlineCopy />
                </button>
              </CopyToClipboard>
            </header>
            <SyntaxHighlighter language="css" style={darcula}>
              {cssCode.css}
            </SyntaxHighlighter>
          </div>
        </div>
      )}
    </div>
  );
}

export default Copy;
