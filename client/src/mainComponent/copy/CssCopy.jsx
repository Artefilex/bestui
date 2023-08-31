import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { AiOutlineCopy } from "react-icons/ai";
import "../../assest/css/copy.css";
function CssCopy({ code, isActive}) {
  return (
    <div className="Copy-container flex">
      {isActive &&   (
        <div className="code-space flex">
          <div className="code-area flex">
            <header className="code-header flex">
             <span>CSS</span>
              <CopyToClipboard text={code.css}>
                <button className="copy-button">
                  <AiOutlineCopy />
                </button>
              </CopyToClipboard>
            </header>
            <SyntaxHighlighter language="css" style={darcula}>
              {code.css}
            </SyntaxHighlighter>
          </div>
        </div>
      )}
    </div>
  );
}

export default CssCopy;
