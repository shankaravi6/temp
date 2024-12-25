import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "./context/theme/ThemeProvider";
import { themeSettings } from "./context/theme/themeConfig";

const App = () => {
  const mode = useSelector((state) => state.app.mode);
  const theme = useMemo(() => themeSettings(mode), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
