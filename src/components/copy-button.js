import React, { useState } from 'react';

const CopyButton = ({ textToCopy, className = "cta" }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 4000);
  };

  return (
    <button className={className} onClick={copyToClipboard}>
      {copied ? 'Copied!' : '1-Click Copy'}
    </button>
  );
};

export default CopyButton;
