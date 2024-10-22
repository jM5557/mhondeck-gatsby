import React from "react";

const DownloadItem = ({ item, onClick }) =>
    <li>
        {item.title}
        <button
            type="button"
            className="cta"
            onClick={
                () => onClick(item)
            }
        >Download</button>
    </li>

export default DownloadItem;