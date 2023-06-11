export const metadata = {
  title: "Login",
  description: "Login",
};

export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer>footer login</footer>
      </body>
    </html>
  );
}
