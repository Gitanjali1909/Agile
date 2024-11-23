import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import About from "./components/About";
import Contact from "./components/Contact";
import "./globals.css";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light-theme">
      <body>
        <Navbar />
        <Hero />
        <Service />
        <About />
        <Contact />
        <Footer/>
        {children}
      </body>
    </html>
  );
}

