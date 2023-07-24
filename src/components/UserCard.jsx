import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import { Avatar, Link } from "@mui/joy";
import { Link as RouterLink } from "react-router-dom";
import { USER } from "../utils/ROUTES";

export default function BasicCard() {
  return (
    <Card variant="outlined" color="info" sx={{ width: 220 }}>
      <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
        <Link href="/sign-up">
          <Avatar
            src="https://avatars.githubusercontent.com/u/13142323?v=4"
            sx={{ "--Avatar-size": "4rem" }}
          />
        </Link>
        <Typography level="h1" fontSize="md" sx={{ mb: 0.5 }}>
          avatar_url
        </Typography>
        <Typography level="body3" variant="soft" sx={{ borderRadius: "sm" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odio
          explicabo quis quo ipsum perspiciatis itaque animi ad beatae corporis?
        </Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
        ></IconButton>
      </CardContent>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body3">Repos:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            12
          </Typography>
        </div>
        <Link
          component={RouterLink}
          to={USER + "ID"}
          sx={{ ml: "auto", fontWeight: 600 }}
        >
          <Button variant="solid" size="sm" color="info">
            Explore
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
