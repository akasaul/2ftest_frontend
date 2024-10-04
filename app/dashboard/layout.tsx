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
  Stack,
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
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            left: 240,
            bgcolor: "#fff",
          }}
          elevation={0}
        >
          <Toolbar>
            <Typography variant="h6" noWrap>
              Restaurant
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="persistent"
          open={open}
          sx={{
            width: 240,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 240,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar>
            <Stack
              direction={"row"}
              alignItems="center"
              justifyContent={"space-between"}
            >
              <Typography>Pizza</Typography>
              <IconButton
                color="inherit"
                edge="start"
                onClick={toggleDrawer}
                sx={{ marginRight: 2 }}
              >
                <Menu />
              </IconButton>
            </Stack>
          </Toolbar>

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
            backgroundColor: "#f8f8f8",
            p: "20px",
            transition: (theme) =>
              theme.transitions.create("margin", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
          }}
        >
          <Toolbar />
          <Box
            component="section"
            sx={{
              padding: "47px",
              backgroundColor: "#fff",
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </AuthGuard>
  );
}
