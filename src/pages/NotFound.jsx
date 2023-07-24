import { Sheet, Typography } from "@mui/joy";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/joy";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
export const NotFound = () => {
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
      <Typography level="h2" sx={{}}>
        {" "}
        404 - Page not found <SentimentVeryDissatisfiedIcon />
      </Typography>
      <Typography level="h6" sx={{}}>
        Did you get the correct URL?
      </Typography>
      <Link component={RouterLink} to="/">
        Back to home
      </Link>
    </Sheet>
  );
};

export default NotFound;
