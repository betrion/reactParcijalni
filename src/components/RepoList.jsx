import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListDivider,
  ListItemDecorator,
  Link,
} from "@mui/joy";
import { useSelector } from "react-redux";

const RepoList = () => {
  const repos = useSelector((state) => state.github.repos);

  const renderRepos = repos.map((repo) => {
    console.log(repo.html_url);

    return (
      <>
        <ListItem key={repo.id}>
          <ListItemButton>
            <Link href={repo.html_url} color="neutral">
              {repo.name}
            </Link>
          </ListItemButton>
        </ListItem>
        <ListDivider />
      </>
    );
  });

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        gap: 6,
        flexWrap: "wrap",
        "& > *": { minWidth: 200, flexBasis: 300 },
      }}
    >
      <Box>
        <List
          size="lg"
          variant="outlined"
          sx={{
            borderRadius: "sm",
            maxWidth: 300,
            boxShadow: "sm",
            bgcolor: "background.body",
          }}
        >
          <ListItem>
            <ListItemDecorator>Repos:</ListItemDecorator>
          </ListItem>
          <ListDivider />
          <ListDivider />
          {renderRepos}
        </List>
      </Box>
    </Box>
  );
};

export default RepoList;
