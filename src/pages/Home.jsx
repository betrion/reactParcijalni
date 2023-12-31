import {
  Sheet,
  Typography,
  FormControl,
  FormLabel,
  Input,
  Button,
  Divider,
  Stack,
} from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";
import UserList from "../components/UserList";
import SearchInput from "../components/SearchInput";

function Home() {
  return (
    <Sheet
      variant="plain"
      color="primary"
      sx={{
        width: "90%",
        mx: "auto", // margin left & right
        my: 1, // margin top & bottom
        py: 3, // padding top & bottom
        px: 2, // padding left & right
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: "sm",
        boxShadow: "md",
      }}
    >
      <SearchInput />

      <Divider orientation="horizontal" sx={{ my: 2 }} />

      <Stack
        direction={{ xs: "column", sm: "row" }}
        gap={2}
        alignItems="center"
        justifyContent={"space-evenly"}
        flexWrap={"wrap"}
      >
        <UserList />
      </Stack>
    </Sheet>
  );
}

export default Home;
