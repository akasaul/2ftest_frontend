import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>Admin Layout</p>
      {children}
    </div>
  );
};

export default AdminLayout;
