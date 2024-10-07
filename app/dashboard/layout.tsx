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
  Button,
} from "@mui/material";
import { Logout, Menu } from "@mui/icons-material";
import { AuthGuard } from "@/guards/auth.guard";
import navItems from "@/configs/navItems";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/providers/AuthProvider";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();
  const { logout } = useAuth();

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
            left: open ? 240 : 0,
            bgcolor: "#fff",
          }}
          elevation={0}
        >
          <Toolbar>
            {!open && (
              <IconButton
                color="inherit"
                edge="start"
                onClick={toggleDrawer}
                sx={{ marginRight: 2 }}
              >
                <Menu />
              </IconButton>
            )}

            <Typography variant="h6" noWrap textTransform={"capitalize"}>
              {pathname.split("/")[2]}
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="persistent"
          open={open}
          sx={{
            width: open ? 240 : 0,
            transition: (theme) =>
              theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
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
              width={"100%"}
            >
              <img
                src={"/icons/pizzaOnly.svg"}
                alt="pizza"
                width={40}
                height={40}
              />
              <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
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

            <Button
              type="submit"
              sx={{ height: "42px", color: "#f00", marginBlock: "10px", width: '100%', textTransform: 'capitalize' }}
              onClick={logout}
            >
              <Stack direction={"row"} justifyContent="center" gap={2}>
                <Typography variant="h5">Logout</Typography>
                <Logout />
              </Stack>
            </Button>
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
