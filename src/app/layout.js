import { Inter, Lato, League_Gothic, Manrope, Poppins } from "next/font/google";
import ClientLayout from "./ClientLayout.jsx";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-poppins" });
const manrope = Manrope({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-manrope" });
const lato = Lato({ subsets: ["latin"], weight: ["400","700"], variable: "--font-lato" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const leagueGothic = League_Gothic({ subsets: ["latin"], weight: "400", variable: "--font-league" });

export const metadata = { 
  title: "Devniq",
  icons: { icon:"/IconLogo.svg" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${manrope.variable} ${lato.variable} ${inter.variable} ${leagueGothic.variable} antialiased`}>
        
        {/* Move all client-side logic into ClientLayout */}
        <ClientLayout>
          {children}
        </ClientLayout>

      </body>
    </html>
  );
}
