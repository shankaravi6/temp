import React from "react";
import {
  TempBox,
  TempFlex,
  TempTitle,
} from "../../components/styled_components/globalStyles";

const NavLogo = () => {
  return (
    <TempFlex gap="20px">
      {/* <TempBox w='30px' h='30px'><TempImg src={MainLogo} sw='50%' width='100%'></TempImg></TempBox> */}
      <TempBox>
        <TempTitle ls=".5rem" fs="clamp(1rem,10vw,2rem)">
          Temp
        </TempTitle>
      </TempBox>
    </TempFlex>
  );
};

export default NavLogo;
