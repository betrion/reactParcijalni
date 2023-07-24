import { Button, useColorScheme } from "@mui/joy";
import { DarkMode, LightMode } from "@mui/icons-material";
function ThemeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      variant="solid"
      color="info"
      size="sm"
      sx={{ borderRadius: "xl", mr: 1 }}
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
    >
      {mode === "dark" ? <LightMode /> : <DarkMode />}
    </Button>
  );
}

export default ThemeToggle;
