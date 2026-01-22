"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar.jsx";

import Footer from "../components/HomeSection/Footer.jsx";
import RouteLoader from "../components/Loading/RouteLoading.jsx";


export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => setLoading(false), 700); 

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <RouteLoader isLoading={loading} />

      <Navbar />
      {children}
      <Footer />
    </>
  );
}
