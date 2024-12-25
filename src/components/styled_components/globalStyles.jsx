import styled from "styled-components";
import { connect } from "react-redux";
import React from "react";
import { useThemeContext } from "../../context/theme/ThemeProvider";

const mapStateToProps = (state) => ({
  mode: state.app.mode,
});

//HOC
const TempComponent = (StyledComponent) => {
  const ConnectedStyledComponent = connect(mapStateToProps)(
    ({ dispatch, ...rest }) => {
      const { palette } = useThemeContext();
      return <StyledComponent {...rest} $palette={palette} />;
    }
  );

  return ConnectedStyledComponent;
};

export const TempBackground = styled.div`
  width: 100%;
  height: ${(props) => (props.h ? props.h : "100vh")};
  background: ${(props) =>
    props.bg ? props.bg : `${props.$palette.background.high}`};
`;

export const TempContainer = TempComponent(styled.div`
  width: 100%;
  background: ${(props) =>
    props.bg ? props.bg : props.$palette.background.high};
  @media screen and (max-width: 768px) {
    max-width: 1300px;
  }
`);

export const TempCenterContainer = TempComponent(styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => (props.br ? props.br : "unset")};
  background: ${(props) => (props.bg ? props.bg : `unset`)};
  @media screen and (max-width: 768px) {
    max-width: 1300px;
  }
`);

export const TempSection = TempComponent(styled.section`
  width: 100%;
  height: ${(props) => (props.h ? props.h : "unset")};
  max-width: ${(props) => (props.mw ? props.mw : "1300px")};
  margin: ${(props) => (props.m ? props.m : "0 auto")};
  background: ${(props) => (props.bg ? props.bg : `unset`)};
  border-radius: ${(props) => (props.br ? props.br : "unset")};
  padding: ${(props) => (props.p ? props.p : "unset")};
  @media screen and (max-width: 970px) {
    padding: ${(props) => (props.sp ? props.sp : "unset")};
    height: ${(props) => (props.sh ? props.sh : "unset")};
  }
  @media screen and (max-width: 1125px) {
    width: ${(props) => (props.mw ? props.mw : "none")};
    padding: ${(props) => (props.mp ? props.mp : "unset")};
  }
`);

export const TempCover = TempComponent(styled.div`
  width: ${(props) => (props.w ? props.w : "unset")};
  height: ${(props) => (props.h ? props.h : "unset")};
  box-shadow: ${(props) => (props.bs ? props.bs : "unset")};
  transform: ${(props) => (props.tr ? props.tr : "unset")};
  background: ${(props) => (props.bg ? props.bg : `unset`)};
  padding: ${(props) => (props.p ? props.p : "unset")};
  margin: ${(props) => (props.m ? props.m : "unset")};
  border-radius: ${(props) => (props.br ? props.br : "unset")};
  border: ${(props) => (props.border ? props.border : "unset")};
  @media screen and (max-width: 970px) {
    padding: ${(props) => (props.sp ? props.sp : "none")};
    height: ${(props) => (props.sh ? props.sh : "none")};
  }
`);

export const TempFlex = TempComponent(styled.div`
  display: flex;
  align-items: ${(props) => (props.al ? props.al : "center")};
  justify-content: ${(props) => (props.jc ? props.jc : "center")};
  flex-direction: ${(props) => (props.dir ? props.dir : "row")};
  width: ${(props) => (props.w ? props.w : "unset")};
  height: ${(props) => (props.h ? props.h : "unset")};
  padding: ${(props) => (props.p ? props.p : "unset")};
  margin: ${(props) => (props.m ? props.m : "unset")};
  gap: ${({ gap }) => (gap ? gap : "unset")};
  box-shadow: ${(props) => (props.bs ? props.bs : "unset")};
  background-color: ${(props) => (props.bg ? props.bg : "unset")};
  border-radius: ${(props) => (props.br ? props.br : "unset")};

  @media screen and (max-width: 970px) {
    flex-direction: ${(props) => (props.sm_dir ? props.sm_dir : "column")};
    padding: ${(props) => (props.sp ? props.sp : "none")};
    align-items: ${(props) => (props.sal ? props.sal : "center")};
    justify-content: ${(props) => (props.sjc ? props.sjc : "center")};
    width: ${(props) => (props.sw ? props.sw : "unset")};
    height: ${(props) => (props.sh ? props.sh : "unset")};
  }
`);

export const TempGrid = TempComponent(styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.columns ? props.columns : "repeat(auto-fit, minmax(250px, 1fr))"};
  gap: ${(props) => (props.gap ? props.gap : "16px")};
  width: ${(props) => (props.w ? props.w : "100%")};
  padding: ${(props) => (props.p ? props.p : "unset")};
  margin: ${(props) => (props.m ? props.m : "unset")};

  @media screen and (max-width: 1125px) {
    grid-template-columns: ${(props) =>
      props.sm_columns ? props.sm_columns : "repeat(2, 1fr)"};
    gap: ${(props) => (props.sm_gap ? props.sm_gap : "12px")};
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: ${(props) =>
      props.xs_columns ? props.xs_columns : "1fr"};
    gap: ${(props) => (props.xs_gap ? props.xs_gap : "8px")};
  }
`);

export const TempBox = styled.div`
  display: ${(props) => (props.display ? props.display : "flex")};
  width: ${(props) => (props.w ? props.w : "auto")};
  height: ${(props) => (props.h ? props.h : "auto")};
  background: ${(props) => (props.bg ? props.bg : "unset")};
  padding: ${(props) => (props.p ? props.p : "unset")};
  margin: ${(props) => (props.m ? props.m : "unset")};
  box-shadow: ${(props) => (props.bs ? props.bs : "unset")};
  border: ${(props) => (props.border ? props.border : "unset")};
  border-radius: ${(props) => (props.br ? props.br : "unset")};

  @media screen and (max-width: 970px) {
    width: ${(props) => (props.sw ? props.sw : "auto")};
    height: ${(props) => (props.sh ? props.sh : "auto")};
    transform: translateX(0) !important;
    display: ${(props) => (props.sdisplay ? props.sdisplay : "flex")};
  }
  @media screen and (max-width: 1125px) {
    width: ${(props) => (props.mw ? props.mw : "none")};
  }
`;

export const TempCard = TempComponent(styled.div`
  width: ${(props) => (props.w ? props.w : "350px")};
  height: ${(props) => (props.h ? props.h : "350px")};
  padding: ${(props) => (props.p ? props.p : "auto")};
  margin: ${(props) => (props.m ? props.m : "auto")};
  border-radius: ${(props) => (props.br ? props.br : "28px")};
  background: ${(props) => (props.bg ? props.bg : `unset`)};
  border: ${(props) => (props.b ? props.b : `unset`)};
  box-shadow: ${(props) => (props.bs ? props.bs : `unset`)};
  transition: all 0.3s ease;
  @media screen and (max-width: 960px) {
    width: ${(props) => (props.sw ? props.sw : "auto")};
    height: ${(props) => (props.sh ? props.sh : "auto")};
  }

  &:hover {
    transition: all 0.3s ease;
  }
`);

export const TempGlassCard = TempComponent(styled.div`
  width: ${(props) => (props.w ? props.w : "350px")};
  height: ${(props) => (props.h ? props.h : "350px")};
  padding: ${(props) => (props.p ? props.p : "auto")};
  margin: ${(props) => (props.m ? props.m : "auto")};
  border-radius: ${(props) => (props.br ? props.br : "28px")};
  background: ${(props) => (props.bg ? props.bg : `rgba(255, 255, 255, 0.2)`)};
  box-shadow: ${(props) =>
    props.bs ? props.bs : `0 4px 30px rgba(0, 0, 0, 0.1)`};
  border: 1px solid
    ${(props) => (props.b ? props.b : "rgba(255, 255, 255, 0.3)")};
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  @media screen and (max-width: 960px) {
    width: ${(props) => (props.sw ? props.sw : "auto")};
    height: ${(props) => (props.sh ? props.sh : "auto")};
  }

  &:hover {
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
    background: ${(props) =>
      props.bg ? props.bg : `rgba(255, 255, 255, 0.3)`};
  }
`);

export const TempImg = styled.img`
  width: ${(props) => (props.w ? props.w : "100%")};
  border-radius: ${(props) => (props.br ? props.br : "unset")};
  @media screen and (max-width: 970px) {
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    width: ${(props) => (props.sw ? props.sw : "unset")};
  }
`;

export const TempBackImg = styled.div`
  width: ${(props) => (props.w ? props.w : "100%")};
  height: ${(props) => (props.h ? props.h : "100%")};
  background: ${(props) => (props.url ? `url(${props.url})` : "none")};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 970px) {
    width: ${(props) => (props.sw ? props.sw : "unset")};
  }
`;

export const TempForm = styled.form`
  width: ${(props) => (props.w ? props.w : "100%")};
  height: ${(props) => (props.h ? props.h : "auto")};
`;

export const TempTitle = TempComponent(styled.h1`
  font-family: "Calibri", sans-serif;
  font-size: ${(props) => (props.fs ? props.fs : "clamp(1.5rem, 10vw, 5rem)")};
  text-align: center;
  letter-spacing: ${(props) => (props.ls ? props.ls : "unset")};
  color: ${(props) => (props.color ? props.color : props.$palette.text.high)};
  text-transform: ${(props) => (props.tt ? props.tt : "unset")};
  margin: unset;

  @media screen and (max-width: 960px) {
    text-align: center;
    margin-left: ${(props) => (props.s_ml ? props.s_ml : "unset")};
  }
`);

export const TempSubTitle = TempComponent(styled.h1`
  font-family: "Calibri", sans-serif;
  font-size: ${(props) => (props.fs ? props.fs : "clamp(1rem, 5vw, 2.5rem)")};
  text-align: ${(props) => (props.ta ? props.ta : "center")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "0px")};
  color: ${(props) => (props.color ? props.color : props.$palette.text.mid)};
  text-shadow: ${(props) => (props.ts ? props.ts : "unset")};
  font-weight: ${(props) => (props.fw ? props.fw : "unset")};
  text-transform: ${(props) => (props.tt ? props.tt : "unset")};
  transition: all 0.3s ease;
  opacity: 1;

  &:hover {
    opacity: 1;
    transition: all 0.3s ease;
  }
`);

export const TempNavText = TempComponent(styled.p`
  font-family: "Calibri", serif;
  font-size: ${(props) => (props.fs ? props.fs : "clamp(1rem, 5vw, 1rem)")};
  text-align: center;
  color: ${(props) => (props.color ? props.color : props.$palette.text.high)};
  transition: all 0.5s ease-in-out;
  text-shadow: ${(props) => (props.ts ? props.ts : "unset")};
  background: ${(props) => (props.bg ? props.bg : "unset")};
  font-weight: ${(props) => (props.fw ? props.fw : "unset")};
  text-transform: ${(props) => (props.tt ? props.tt : "unset")};
  opacity: 0.95;

  &::after {
    content: "";
    display: block;
    width: 0%;
    opacity: 0;
    transition: all 0.5s ease-in-out;
    border-bottom: ${(props) => `2px solid ${props.$palette.text.mid}`};
  }

  &:hover::after {
    opacity: 0.75;
    width: 100%;
    transition: all 0.5s ease-in-out;
  }
`);

export const TempTypography = TempComponent(styled.p`
  font-size: ${(props) => (props.fs ? props.fs : "clamp(1rem, 5vw, 1.5rem)")};
  font-weight: ${(props) => (props.fw ? props.fw : "normal")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "1px")};
  font-family: ${(props) => (props.fm ? props.fm : "Calibri, sans-serif")};
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  color: ${(props) => (props.color ? props.color : props.$palette.text.high)};
  text-align: ${(props) => (props.ta ? props.ta : "justify")};
  text-shadow: ${(props) => (props.ts ? props.ts : "unset")};
  text-transform: ${(props) => (props.tt ? props.tt : "unset")};
  opacity: 0.75;
`);

export const TempSpan = TempComponent(styled.span`
  font-size: ${(props) => (props.fs ? props.fs : "clamp(1rem, 5vw, 1.5rem)")};
  font-weight: ${(props) => (props.fw ? props.fw : "normal")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "1px")};
  font-family: ${(props) => (props.fm ? props.fm : `Calibri, sans-serif`)};
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  color: ${(props) => (props.color ? props.color : props.$palette.text.high)};
  text-align: ${(props) => (props.ta ? props.ta : "justify")};
  text-shadow: ${(props) => (props.ts ? props.ts : "unset")};
  font-style: ${(props) => (props.fst ? props.fst : "normal")};
  text-transform: ${(props) => (props.tt ? props.tt : "unset")};
`);

export const TempCustDiv = TempComponent(styled.div`
  display: block;
`);
