import React, { useState } from "react";
import { Link } from 'react-router-dom'

import MainHeader from "./mainHeader";
import NavLinks from "./navLinks";

const MainNavigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <MainHeader>
            <div className="flex items-center justify-between w-full">
                <h2 className="text-white text-xl font-bold">
                    <Link to='/'>logo here....</Link>
                </h2>
                {/* Hamburger button for small screens */}
                <button
                    className="sm:hidden flex flex-col justify-center items-center ml-4"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                >
                    {!menuOpen ? (
                        <>
                            <span className="block w-6 h-0.5 bg-white mb-1"></span>
                            <span className="block w-6 h-0.5 bg-white mb-1"></span>
                            <span className="block w-6 h-0.5 bg-white"></span>
                        </>
                    ) : null}
                </button>
                {/* NavLinks: hidden on small screens unless menuOpen */}
                <nav className={`flex-1 ${menuOpen ? 'block' : 'hidden'} sm:block relative`}>
                    {menuOpen ? (
                        <div className="flex flex-col relative bg-gray-800 rounded-md p-2 mt-2">
                            <button
                                className="absolute top-2 right-2 z-50 sm:hidden"
                                onClick={() => setMenuOpen(false)}
                                aria-label="Close navigation menu"
                            >
                                <span className="block w-6 h-6 text-white text-2xl">&#10005;</span>
                            </button>
                            <div className="mt-8">
                                <NavLinks mobile={menuOpen} />
                            </div>
                        </div>
                    ) : (
                        <NavLinks mobile={false} />
                    )}
                </nav>
            </div>
        </MainHeader>
    )
};

export default MainNavigation;