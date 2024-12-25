import React from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  TempCover,
  TempFlex,
} from "../../components/styled_components/globalStyles";
import { setMode } from "../../store";
import { colorTokens } from "../../context/theme/themeConfig";

const NavButtons = () => {
  const mode = useSelector((state) => state.app.mode);
  const dispatch = useDispatch();

  return (
    <TempFlex gap="20px">
      {mode == "light" ? (
        <TempCover
          className="cursor-pointer"
          onClick={() => {
            dispatch(setMode("dark"));
          }}
        >
          <MdDarkMode />
        </TempCover>
      ) : (
        <TempCover
          className="cursor-pointer"
          onClick={() => {
            dispatch(setMode("light"));
          }}
        >
          <MdLightMode style={{ color: `${colorTokens.drops[200]}` }} />
        </TempCover>
      )}
    </TempFlex>
  );
};

export default NavButtons;
