import Header from "@/components/landing-page/header";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Props) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default HomeLayout;
