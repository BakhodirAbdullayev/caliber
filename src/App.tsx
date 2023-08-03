import Layout from "./components/Layout";
import Home from "./pages/Home";
import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";

export interface IContext {
  mode: "light" | "dark";
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}
export const DataContext = createContext<IContext | null>(null);
function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [active, setActive] = useState<string>("home");

  return (
    <>
      <ThemeProvider theme={theme[mode]}>
        <DataContext.Provider value={{ active, setActive, mode, setMode }}>
          <Layout>
            <Home />
          </Layout>
        </DataContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
