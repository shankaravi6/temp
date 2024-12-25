import React from "react";
import { TempFooterSection } from "../../components/styled_components/footerbarStyles/FooterStyles";
import {
  TempFlex,
  TempSection,
  TempSubTitle,
  TempTypography,
} from "../../components/styled_components/globalStyles";

const FooterBar = () => {
  return (
    <TempFooterSection>
      <TempSection mp="10px" sp="10px">
        <TempFlex w="100%" jc="space-between">
          <TempFlex sw="100%" w="500px">
            <TempTypography fs="14px" ls="0px">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, quis
              pellentesque leo netus torquent vel, est nisi tempor ac ad
              himenaeos.
            </TempTypography>
          </TempFlex>
          <TempFlex dir="column" al="flex-start">
            <TempTypography fs="14px">UNISERSAL SUBJET</TempTypography>
            <TempSubTitle fst="normal" fs="14px">
              REFINE @2024
            </TempSubTitle>
          </TempFlex>
        </TempFlex>
      </TempSection>
    </TempFooterSection>
  );
};

export default FooterBar;
