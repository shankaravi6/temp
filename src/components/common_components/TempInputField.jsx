import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useThemeContext } from "../../context/theme/ThemeProvider";

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

const StyledInput = TempComponent(styled.input`
  display: block;
  position: relative;
  padding: 5px 25px;
  font-weight: normal;
  width: ${(props) => (props.width ? props.width : "max-content")};
  border-radius: ${(props) => (props.br ? props.br : "5px")};
  background-color: ${(props) =>
    props.bg ? props.bg : props.$palette.background.high};
  color: ${(props) => (props.color ? props.color : props.$palette.text.high)};
  border: 1px solid
    ${(props) => (props.err ? "#FF5733" : props.$palette.text.high)};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${(props) =>
      props.placecolor ? props.placecolor : props.$palette.text.mid};
  }

  &:hover {
    border: 1.25px solid
      ${(props) => (props.err ? "#FF5733" : props.$palette.text.high)};
    transition: all 0.25s ease;
  }

  &:active,
  &:focus {
    border: 1.5px solid
      ${(props) => (props.err ? "#FF5733" : props.$palette.text.high)};
    transition: all 0.25s ease;
    box-shadow: ${(props) => props.$palette.background.high} 0px 5px 15px;
  }

  &:focus-visible {
    outline: unset;
  }
`);

const HelperText = styled.span`
  color: ${(props) => (props.err ? "#FF5733" : "#FF5733")};
`;

const TempInputField = ({
  placeholder,
  width,
  onChange,
  name,
  value,
  err,
  helperText,
  type,
  style,
  bg,
  color,
  placecolor,
  className,
}) => {
  return (
    <span style={{ width: "max-content" }}>
      <StyledInput
        placeholder={placeholder}
        width={width}
        onChange={onChange}
        name={name}
        value={value}
        err={err}
        type={type}
        style={style}
        bg={bg}
        color={color}
        className={className}
        placecolor={placecolor}
      />
      {err && helperText && <HelperText err={err}>{helperText}</HelperText>}
    </span>
  );
};

export default TempInputField;
