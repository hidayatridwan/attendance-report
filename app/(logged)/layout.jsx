import Footer from "@components/Footer";
import Header from "@components/Header";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Home",
  description: "Home",
};

const Layout = ({ children }) => {
  return (
    <div className="logged">
      <Header />
      <main>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
