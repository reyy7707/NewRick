import React from "react";
import '../components/header.css'
import { Link } from 'react-router-dom'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
  } from '@chakra-ui/react'

    const Header = () => {

        return(
            <>
                <div className="header_100">
                    <div className="header_30">
                        <Link to={'/'}>
                            <img src="../public/logo-black 1.png" />
                        </Link>
                    </div>
                    <div className="header_70">
                        <div className="header_70_div">
                            <Link to={"/character"}> Characters </Link>
                            <Link to={"/location"}> Locations </Link>
                            <Link to={"/episode"}> Episodes </Link>
                                <Menu>
                                    <MenuButton as={Button} className="burgerMenu" >
                                        Menu
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem className="menuItem"> <Link to={'/character'}> Character </Link> </MenuItem>
                                        <MenuItem className="menuItem"> <Link to={'/location'}> Location </Link> </MenuItem>
                                        <MenuItem className="menuItem"> <Link to={'/episode'}> Episodes </Link> </MenuItem>
                                    </MenuList>
                                </Menu>
                        </div>
                    </div>
                </div>

               
            </>
        )
    }
export default Header