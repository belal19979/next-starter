import Link from "next/link";
import Image from "next/image";
import { AuthButtons } from "./AuthButtons";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link href="/">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image src="/logo.png" alt="logo" width={144} height={30} />
            </Box>
          </Link>
          <AuthButtons />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
