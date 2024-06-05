import React, { useState } from 'react';

const CopyButton = ({ 
  textToCopy, 
  className = "cta", 
innerText = "1-Click Copy",
innerClickedText = "Copied" }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 4000);
  };

  return (
    <button className={className} onClick={copyToClipboard}>
      {copied ? innerClickedText : innerText}
    </button>
  );
};

export default CopyButton;
