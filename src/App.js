import {CssBaseline, ThemeProvider} from "@material-ui/core";
import Theme from './components/core/Theme';
import MainView from "./views";

function App() {
  return <ThemeProvider theme={Theme}>
      <CssBaseline />
      <MainView />
  </ThemeProvider>
}

export default App;