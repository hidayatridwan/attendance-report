import Footer from "@components/Footer";
import Header from "@components/Header";

const Layout = ({ children }) => {
  return (
    <div className="logged">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
