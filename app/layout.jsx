import Provider from "@components/Provider";
import ToastProvider from "@providers/toast-provider";
import "@styles/globals.css";

export const metadata = {
  title: "Login",
  description: "Login",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
      <body>
        <Provider>
          <ToastProvider />
          {children}
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
