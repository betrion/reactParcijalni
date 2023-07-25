import {
  Sheet,
  Typography,
  Button,
  Divider,
  Stack,
  Card,
  Box,
  AspectRatio,
  CardContent,
} from "@mui/joy";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "@mui/joy";
import { Link as RouterLink } from "react-router-dom";
import { HOME } from "../utils/ROUTES";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRepos, getUser } from "../redux/GithubSlice";
import RepoList from "../components/RepoList";

function User() {
  const dispatch = useDispatch();
  const requestedUser = useSelector((state) => state.github.request);
  const displayUser = useSelector((state) => state.github.user);
  const displayRepos = useSelector((state) => state.github.repos);
  const clearSearch = () => {
    dispatch(getUser({}));
    dispatch(getRepos([]));
  };
  //set user data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.github.com/users/${requestedUser}`,
      );
      const data = await response.json();
      dispatch(getUser(data));
    };
    fetchData().catch((err) => {
      console.log(err);
    });
  }, []);
  //set user repos
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.github.com/users/${requestedUser}/repos`,
      );
      const data = await response.json();
      dispatch(getRepos(data));
    };
    fetchData().catch((err) => {
      console.log(err);
    });
  }, []);

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
      {/* user info card */}
      <Box
        sx={{
          width: "100%",
          position: "relative",
          overflow: { xs: "hidden", sm: "initial" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            display: "block",
            width: "1px",
            left: "500px",
            top: "-24px",
            bottom: "-24px",
          }}
        />

        <Card
          orientation="horizontal"
          sx={{
            width: "100%",
            flexWrap: "wrap",
            [`& > *`]: {
              "--stack-point": "500px",
              minWidth:
                "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
            },
            overflow: "auto",
            resize: "horizontal",
          }}
        >
          <AspectRatio
            ratio="1"
            maxHeight={282}
            sx={{ minWidth: 182, flex: 1 }}
          >
            <img
              src={displayUser.avatar_url}
              srcSet={displayUser.avatar_url}
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <CardContent>
            <Typography fontSize="xl" fontWeight="lg">
              {displayUser.login}
            </Typography>
            <Typography level="body2" fontWeight="lg" textColor="text.tertiary">
              {displayUser.bio || "No biography..."}
            </Typography>
            <Typography level="body3" fontWeight="lg" textColor="text.tertiary">
              {displayUser.location || "Unknown location"}
            </Typography>
            <Sheet
              sx={{
                bgcolor: "background.level1",
                borderRadius: "sm",
                p: 2.5,
                my: 2.5,
                display: "flex",
                gap: 2,
                "& > div": { flex: 1 },
              }}
            >
              <div>
                <Typography level="body3" fontWeight="lg">
                  Repos
                </Typography>
                <Typography fontWeight="lg">
                  {displayUser.public_repos || "none"}
                </Typography>
              </div>
              <div>
                <Typography level="body3" fontWeight="lg">
                  Followers
                </Typography>
                <Typography fontWeight="lg">
                  {displayUser.followers || "none"}
                </Typography>
              </div>
              <div>
                <Typography level="body3" fontWeight="lg">
                  Name
                </Typography>
                <Typography level="body4" fontWeight="lg" color="info">
                  {displayUser.name || "Not provided"}
                </Typography>
              </div>
            </Sheet>
            <Box
              sx={{
                display: "flex",
                gap: 1.5,
                "& > button": { flex: 1, mt: 5.5 },
              }}
            >
              <Button variant="solid" color="info" size="lg">
                Visit
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Divider orientation="horizontal" sx={{ my: 2 }} />

      <Sheet
        sx={{
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
          justifyContent: "center",
          mx: 2,
        }}
      >
        {" "}
        <Link component={RouterLink} to={HOME}>
          {" "}
          <Button
            sx={{ mt: 1, width: 200, alignSelf: "flex-start", pt: 1 }}
            variant="solid"
            color="info"
            size="lg"
            onClick={clearSearch}
          >
            <ArrowBack /> Nazad na pretraživanje
          </Button>
        </Link>
        <RepoList />
      </Sheet>
    </Sheet>
  );
}

export default User;
