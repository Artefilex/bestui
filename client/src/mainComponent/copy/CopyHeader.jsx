import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { AiOutlineCopy } from "react-icons/ai";

function CopyHeader({ text, itemType, code }) {
  return (
    <div className="Copy-Header flex">
      <header>
        <h2 className="flex"> {itemType} </h2>
        <p>{text}</p>
      </header>

      <div className="code-area flex">
        <header className="code-header flex">
          <span>Code</span>
          <CopyToClipboard text={code}>
            <button className="copy-button">
              <AiOutlineCopy />
            </button>
          </CopyToClipboard>
        </header>
        <SyntaxHighlighter language="css" style={darcula}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default CopyHeader;
