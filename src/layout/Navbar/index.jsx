import React, { useState } from 'react';
import MobileNavbar from './components/MobileNavbar';
import DesktopNavbar from './components/DesktopNavbar';

function Navbar() {
    const [menuBarOpen, setMenuBarOpen] = useState(false);

    const handleTogglerMenuBar = () => {
        setMenuBarOpen(!menuBarOpen)
    }

    return (
        <>
            <DesktopNavbar />
            <MobileNavbar 
                handleTogglerMenuBar={handleTogglerMenuBar}
                menuBarOpen={menuBarOpen}
            />
        </>
    );
}

export default Navbar;