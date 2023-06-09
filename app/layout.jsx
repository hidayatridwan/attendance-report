import "@styles/globals.css";

export const metadata = {
  title: "Attendance report",
  description: "Reporting all attend employee",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <header></header>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
