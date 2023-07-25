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
import { getUser } from "../redux/GithubSlice";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function User() {
  const dispatch = useDispatch();
  const requestedUser = useSelector((state) => state.github.request);
  const displayUser = useSelector((state) => state.github.user);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("../../../src/sample/mojombo.json");
      const data = await response.json();
      dispatch(getUser(data));
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
          overflow: { xs: "auto", sm: "initial" },
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
                p: 1.5,
                my: 1.5,
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
            <Box sx={{ display: "flex", gap: 1.5, "& > button": { flex: 1 } }}>
              <Button variant="solid" color="info">
                Visit
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Divider orientation="horizontal" sx={{ my: 2 }} />

      <Stack
        direction={{ xs: "column", sm: "row" }}
        gap={2}
        alignItems="center"
        justifyContent={"space-evenly"}
        flexWrap={"wrap"}
      ></Stack>
      <Link component={RouterLink} to={HOME}>
        {" "}
        <Button
          sx={{ mt: 1, width: 200, alignSelf: "center", pt: 1 }}
          variant="solid"
          color="info"
          size="lg"
        >
          <ArrowBack /> Nazad na pretraživanje
        </Button>
      </Link>
    </Sheet>
  );
}

export default User;
