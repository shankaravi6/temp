import React from "react";
import { Link } from "react-router-dom";
import { navData } from "../../data/navData";
import {
  TempFlex,
  TempNavText,
} from "../../components/styled_components/globalStyles";

const NavLinks = () => {
  return (
    <TempFlex gap="clamp(0.5rem,5vw,1.5rem)">
      {navData.map((data, index) => {
        return (
          <Link key={index} to={data.to}>
            <TempNavText>{data.name}</TempNavText>
          </Link>
        );
      })}
    </TempFlex>
  );
};

export default NavLinks;
