"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Box,
  ListItemButton,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { AuthGuard } from "@/guards/auth.guard";
import navItems from "@/configs/navItems";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <AuthGuard>
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={toggleDrawer}
              sx={{ marginRight: 2 }}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" noWrap>
              Restaurant
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="persistent"
          open={open}
          sx={{
            width: 250,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 240,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />

          <Box sx={{ overflow: "auto", paddingInline: "10px" }}>
            <List>
              {navItems.map((item, index) => (
                <Link key={index} href={item.path}>
                  <ListItemButton
                    selected={pathname == item.path}
                    sx={{
                      borderRadius: "10px",
                      marginBottom: "5px",
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      sx={{
                        fontWeight: 700,
                      }}
                    />
                  </ListItemButton>
                </Link>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            transition: (theme) =>
              theme.transitions.create("margin", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    </AuthGuard>
  );
}
