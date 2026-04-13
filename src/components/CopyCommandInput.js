import React from "react";
import CopyButton from "./CopyButton";

const CopyCommandInput = ({ copyCommand, className="" }) => {
    return (
        <div className={`${className} copy-wrapper space-between`}>
            <input type="text" contentEditable="false" value={copyCommand} />
            <CopyButton textToCopy={copyCommand} className="cta small" innerText="Copy" />
        </div>
    )
}

export default CopyCommandInput;