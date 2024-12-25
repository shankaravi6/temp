import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useThemeContext } from "../../context/theme/ThemeProvider";
import { colorTokens } from "../../context/theme/themeConfig";

const mapStateToProps = (state) => ({
  mode: state.app.mode,
});

const TempComponent = (StyledComponent) => {
  const ConnectedStyledComponent = connect(mapStateToProps)(
    ({ dispatch, ...rest }) => {
      const { palette } = useThemeContext();
      return <StyledComponent {...rest} $palette={palette} />;
    }
  );

  return ConnectedStyledComponent;
};

const StyledText = TempComponent(styled.span`
  text-align: center;
  font-size: auto;
  line-height: 30px;
  color: ${(props) => props.$palette.text.low};
  transition: all 0.3s ease-out;
  display: block;
`);

const StyledButton = TempComponent(styled.button`
  text-align: center;
  letter-spacing: 1.5px;
  border: 1px solid ${(props) => props.$palette.background.low};
  background: ${(props) => props.$palette.background.low};
  box-shadow: ${(props) => props.$palette.background.main} 0px;
  transition: all 0.3s ease;
  font-weight: 400;
  padding: 5px 25px;
  width: ${(props) => (props.width ? props.width : "max-content")};
  display: block;
  border-radius: ${(props) => (props.br ? props.br : "5px")};
  opacity: 0.75;
  position: relative;

  &:hover {
    opacity: 0.85;
    border: 1px solid ${(props) => props.$palette.text.high};
    transition: all 0.3s ease-out;
  }
`);

const StyledOutlineButton = TempComponent(styled.button`
  text-align: center;
  letter-spacing: 1.5px;
  border: 1px solid ${(props) => props.$palette.background.low};
  background: ${colorTokens.drops[50]};
  box-shadow: ${(props) => props.$palette.background.main} 0px;
  transition: all 0.3s ease;
  font-weight: 400;
  padding: 5px 25px;
  width: ${(props) => (props.width ? props.width : "max-content")};
  display: block;
  border-radius: ${(props) => (props.br ? props.br : "5px")};
  opacity: 0.75;
  position: relative;

  &:hover {
    opacity: 0.85;
    border: 1px solid ${(props) => props.$palette.text.high};
    transition: all 0.3s ease-out;
  }
`);

const TempButton = ({
  height,
  width,
  onChange,
  onSubmit,
  onClick,
  onBlur,
  type,
  children,
  style,
  variant,
}) => {
  return (
    <>
      {variant == "outline" ? (
        <StyledOutlineButton
          height={height}
          width={width}
          onChange={onChange}
          onSubmit={onSubmit}
          onClick={onClick}
          onBlur={onBlur}
          type={type}
          style={style}
        >
          {children}
        </StyledOutlineButton>
      ) : (
        <StyledButton
          height={height}
          width={width}
          onChange={onChange}
          onSubmit={onSubmit}
          onClick={onClick}
          onBlur={onBlur}
          type={type}
          style={style}
        >
          <StyledText>{children}</StyledText>
        </StyledButton>
      )}
    </>
  );
};

export default TempButton;
