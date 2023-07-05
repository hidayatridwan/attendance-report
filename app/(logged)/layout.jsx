'use client';

import Footer from "@components/Footer";
import Header from "@components/Header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const metadata = {
  title: "Home",
  description: "Home",
};

const Layout = ({ children }) => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.status !== 'authenticated') {
      router.push('/')
    }
  }, [session]);

  return (
    <div className="logged">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
