"use client";
import { AuthGuard } from "@/guards/auth.guard";

const OrderLayout = ({ children }: { children: React.ReactNode }) => {
  return <AuthGuard>{children}</AuthGuard>;
};

export default OrderLayout;
