import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en-CA">
      <body>{children}</body>
    </html>
  );
}
