import React from "react";

interface Props {
  children: React.ReactNode;
}

const UserLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default UserLayout;
