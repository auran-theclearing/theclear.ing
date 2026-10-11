import "./globals.css";
import Footer from "./components/Footer";

export const metadata = {
  title: {
    default: "in the clearing",
    template: "%s · in the clearing",
  },
  description: "a clearing for things being made.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
