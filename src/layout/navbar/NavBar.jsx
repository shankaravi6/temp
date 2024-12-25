import React, { useState } from "react";
import {
  TempCover,
  TempFlex,
  TempSection,
} from "../../components/styled_components/globalStyles";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import { FiMenu, FiX } from "react-icons/fi";
import NavButtons from "./NavButtons";
import {
  TempNavSection,
  TempFullScreenMenu,
  TempCloseIconWrapper,
  TempMenuIconWrapper,
} from "../../components/styled_components/navbarStyles/NavStyles";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <TempCover>
      <TempNavSection h="70px">
        <TempSection p="10px">
          <TempFlex p="1px 0px" jc="space-between" ai="center">
            <NavLogo />
            <TempFlex gap="25px" className="nav-links">
              <NavLinks />
            </TempFlex>
            <TempFlex className="menu-icon" onClick={toggleMenu}>
              <TempMenuIconWrapper>
                {isMenuOpen ? null : <FiMenu size={24} />}
              </TempMenuIconWrapper>
            </TempFlex>
          </TempFlex>
        </TempSection>
      </TempNavSection>

      {isMenuOpen && (
        <TempFullScreenMenu>
          <TempCloseIconWrapper onClick={toggleMenu}>
            <FiX size={24} />
          </TempCloseIconWrapper>
          <TempFlex gap="25px" className="menu-links">
            <NavLinks />
            <NavButtons />
          </TempFlex>
        </TempFullScreenMenu>
      )}
    </TempCover>
  );
};

export default NavBar;
