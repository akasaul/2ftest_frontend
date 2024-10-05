import { AccountCircle } from "@mui/icons-material";
import { paths } from "./paths";

const navItems = [
  {
    title: "Orders",
    path: paths.dashboard.orders,
    icon: <AccountCircle />,
  },
  {
    title: "Add menu",
    path: paths.dashboard.addMenu,
    icon: <AccountCircle />,
  },
  {
    title: "Roles",
    path: paths.dashboard.roles,
    icon: <AccountCircle />,
  },
  {
    title: "Users",
    path: paths.dashboard.users,
    icon: <AccountCircle />,
  },
];

export default navItems;
