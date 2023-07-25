import { Typography, FormControl, FormLabel, Input, Button } from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/GithubSlice";
export const SearchInput = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getUser(input));
    setInput("");
  };
  return (
    <>
      <Typography level="h1" sx={{}}>
        Github tražilica
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Unesite ime korisnika</FormLabel>
          <Input
            name="search"
            type="search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="npr. Facebook, Redux.."
            color="info"
          />
          <Button
            sx={{ mt: 1, width: 100, alignSelf: "center", pt: 1 }}
            variant="solid"
            color="info"
            size="lg"
            type="submit"
          >
            <SearchIcon /> Pretraži
          </Button>
        </FormControl>
      </form>
    </>
  );
};

export default SearchInput;
