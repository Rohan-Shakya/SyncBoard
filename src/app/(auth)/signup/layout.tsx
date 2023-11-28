import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | SyncBoard",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
