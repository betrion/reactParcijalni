import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import { Avatar, Link } from "@mui/joy";
import { Link as RouterLink } from "react-router-dom";
import { USER } from "../utils/ROUTES";
import { useDispatch } from "react-redux";
import { getRequests, getUser } from "../redux/GithubSlice";

export default function BasicCard({ user }) {
  const { login, avatar_url, html_url, id } = user;
  const dispatch = useDispatch();
  return (
    <Card variant="outlined" color="info" sx={{ width: 220 }}>
      <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
        <Link href={html_url}>
          <Avatar src={avatar_url} sx={{ "--Avatar-size": "4rem" }} />
        </Link>
        <Typography level="h1" fontSize="md" sx={{ mb: 0.5 }}>
          {login}
        </Typography>
        <Typography level="body3" variant="soft" sx={{ borderRadius: "sm" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odio
          explicabo quis quo ipsum perspiciatis itaque animi ad beatae corporis?
        </Typography>
        <IconButton
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
          to={USER + login}
          sx={{ ml: "auto", fontWeight: 600 }}
        >
          <Button
            variant="solid"
            size="sm"
            color="info"
            onClick={() => dispatch(getRequests(login))}
          >
            Explore
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
