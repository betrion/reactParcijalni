import { GitHub } from "@mui/icons-material";
import { Button } from "@mui/joy";
import { Link } from "@mui/material";

export const ContactButton = () => {
  return (
    <Link href="https://github.com/betrion">
      <Button
        variant="solid"
        color="info"
        size="sm"
        sx={{ borderRadius: "xl", mr: 1 }}
      >
        <GitHub />
      </Button>
    </Link>
  );
};

export default ContactButton;
