import { CssBaseline, Sheet, CssVarsProvider } from "@mui/joy";
import ThemeToggle from "./utils/ThemeToggle";
import ContactButton from "./components/ContactButton";
import Home from "../src/pages/Home";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Sheet sx={{ height: "100vh" }} variant="solid">
      <Sheet
        variant="solid"
        color="neutral"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        {/* css reset */}
        <CssBaseline />
        <CssVarsProvider defaultMode="system">
          <Sheet
            variant="solid"
            sx={{
              mx: "auto",
              px: 1,
              py: 1,
              textAlign: "end",
              width: "93%",
            }}
          >
            <ContactButton />
            <ThemeToggle />
          </Sheet>

          {/* React router */}
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/user/:id" element={<User />} />
            </Routes>
          </Router>
        </CssVarsProvider>
      </Sheet>
    </Sheet>
  );
}

export default App;
