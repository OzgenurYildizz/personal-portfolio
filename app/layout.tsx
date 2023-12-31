import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Image from "next/image";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] }); /*font from google */ 

export const metadata = {
  title: "Ozgenur Yildiz | Personal Portfolio",
  description: "Ozgenur Yildiz, 4th year computer engineering student.", /*arama motoru için */
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative  pt-14 sm:pt-24 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`} /* {inter.className} ilk hali*/
      /*pt-14 sm:pt-24 -> navbardan sonra boşluk olması için çünkü navbar flex olduğundan yer kaplamıyo */> 
        <div className="absolute top-[-1rem] -z-10" /* absolute: yer kaplamasın diye -z alta gelmesi için*/>
          <Image src="/images/bg-light.jpg" alt="backgroung-img"  width={6000} height={2874} className="w-auto h-[40rem] sm:h-screen"></Image>
        </div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header /> 
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
