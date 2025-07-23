import React from "react";

const MainHeader = props => {
    return (
        <header className="bg-gray-800 p-4 w-full fixed top-0 left-0 flex items-center z-50 min-h-[72px]">
            {props.children}
        </header>
    )
};

export default MainHeader;