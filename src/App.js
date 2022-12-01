import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import { Route, Routes } from "react-router-dom";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Profile from "./scenes/profile";
import Calendar from "./scenes/calendar";
import Faq from "./scenes/faq";
import BarChartPage from "./scenes/BarChartPage";
import PieChartPage from "./scenes/PieChartPage";
import LineChartPage from "./scenes/LineChartPage";
import MapPage from "./scenes/MapPage";

function App() {
  const [theme, colorMode] = useMode();
  return (
    //the theme will be available from the root to tother conmponents
    <ColorModeContext.Provider value={colorMode}>
      {/* theme for material ui */}
      <ThemeProvider theme={theme}>
        {/* sets css to the basics */}
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/bar" element={<BarChartPage />} />
              <Route path="/line" element={<LineChartPage />} />
              <Route path="/pie" element={<PieChartPage />} />
              <Route path="/map" element={<MapPage />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
