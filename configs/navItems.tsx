import { Home, AccountCircle } from "@mui/icons-material";
import { paths } from "./paths";

const navItems = [
  {
    title: "Orders",
    path: paths.dashboard.orders,
    icon: <AccountCircle />,
  },
  {
    title: "Home",
    path: paths.dashboard.home,
    icon: <Home />,
  },
  {
    title: "Roles",
    path: paths.dashboard.roles,
    icon: <AccountCircle />,
  },
];

export default navItems;
