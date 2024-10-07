import {
  AccountCircle,
  LocalPizzaSharp,
  DeliveryDining,
  VerifiedUser,
} from "@mui/icons-material";
import { paths } from "./paths";

const navItems = [
  {
    title: "Orders",
    path: paths.dashboard.orders,
    icon: <DeliveryDining />,
  },
  {
    title: "Add menu",
    path: paths.dashboard.addMenu,
    icon: <LocalPizzaSharp />,
  },
  {
    title: "Roles",
    path: paths.dashboard.roles,
    icon: <AccountCircle />,
  },
  {
    title: "Users",
    path: paths.dashboard.users,
    icon: <VerifiedUser />,
  },
];

export default navItems;
