import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | SyncBoard",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
