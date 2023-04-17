import Router from './Router';
import { GlobalStyle } from "./style/globalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from './style/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
