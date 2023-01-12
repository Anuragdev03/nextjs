import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Divider,
  Button,
  Box,
} from "@mui/material";
import { Menu as MenuIcon, KeyboardArrowRightSharp } from "@mui/icons-material";
import Link from "next/link";

const SideNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navList = () => {
    const navItem = [
      { name: "Modal", link: "/" },
      { name: "Charts", link: "/chart" },
    ];

    return navItem.map((item, i) => (
      <List key={item.name} sx={{ width: "250px" }}>
        <ListItem key={i} onClick={() => setIsOpen(false)} disablePadding>
          <Link href={item.link}>
            <ListItemButton>
              <KeyboardArrowRightSharp />
              {item.name}
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    ));
  };

  return (
    <Box sx={{ height: "100vh" }}>
      <Button onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </Button>
      <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
        <h4 style={{ fontSize: "24px", textAlign: "center" }}>Menu</h4>
        <Divider />
        {navList()}
      </Drawer>
    </Box>
  );
};

export default SideNav;
