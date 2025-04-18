import React from 'react';
import { menuItems } from '../data';
import { 
    Contacts, 
    HeaderContent, 
    MenuItems, 
    MobNavbarContent, 
    MobNavbarWrapper,
    ContactsWrapper
} from './Navbar.styles';
import {
    MenuTogglerIcon,
    HeartIcon,
    CartIcon,
    HideMenuIcon,
    NetworkIcon,
    TogglerIcon
} from "@/assets/icons"

import { Link } from 'react-router';

import LogoSvg from '@/assets/images/logo.svg'

import { Input, Button } from '@/components'

function MobileNavbar(props) {
    const { handleTogglerMenuBar, menuBarOpen } = props;

    return (
        <MobNavbarWrapper>
            <div className="navbar-content">
                <div className='logo-menu-toggler'>
                    <div className="pointer" onClick={handleTogglerMenuBar}>
                        <MenuTogglerIcon />
                    </div>
                    <Link to='/'>
                        <img src={LogoSvg} alt="Logo" />
                    </Link>
                </div>
                <div className='actions-side'>
                    <Link to="/">
                        <HeartIcon />
                    </Link>
                    <Link to="/">
                        <CartIcon />
                    </Link>
                </div>
            </div>
            <Input type="search" placeholder="Поиск по товарам" />
            {menuBarOpen ? (
                <MobNavbarContent>
                    <HeaderContent>
                        <div className="pointer" onClick={handleTogglerMenuBar}>
                            <HideMenuIcon />
                        </div>
                        <div className='action-bar'>
                            <div>
                                <HeartIcon />
                            </div>
                            <div>
                                <NetworkIcon />
                            </div>
                            <div>
                                <CartIcon />
                            </div>
                        </div>
                    </HeaderContent>
                    <MenuItems mobile="true">
                        {menuItems.map(i => <Link key={i.text} to={i.to} className={i.class}>{i.text}</Link>)}
                    </MenuItems>
                    <Contacts>
                        <Button>
                            <TogglerIcon /> Каталог
                        </Button>
                        <ContactsWrapper mobile="true">
                            <a href='tel:88008904656'>8 (800) 890-46-56</a>
                            <button>Заказать звонок</button>
                        </ContactsWrapper>
                    </Contacts>
                </MobNavbarContent>
            ) : null}
        </MobNavbarWrapper>
    );
}

export default MobileNavbar;