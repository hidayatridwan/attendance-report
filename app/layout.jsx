import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "Login",
  description: "Login",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
};

export default RootLayout;
