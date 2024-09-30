import Navbar from "@/components/ui/Navbar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const UserLayout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default UserLayout;
