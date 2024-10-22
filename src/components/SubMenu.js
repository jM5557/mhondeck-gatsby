import React from "react";

const SubMenu = ({
    currentTab,
    setCurrentTab,
    tabOptions
}) => (
    <nav className="sub-menu">
        { tabOptions.map(tabOption=>(
            <button
                key={tabOption.text}
                type="button"
                onClick={() => setCurrentTab(tabOption.option)} 
                className={tabOption.option==currentTab?"selected":""}
            >
                {tabOption.text}
            </button>
        ))}
    </nav>
)

export default SubMenu;