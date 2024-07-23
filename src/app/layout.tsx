'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider, useSelector } from "react-redux";
import { store } from "@/lib/store";
import Profile from "./profile/page";
import Link from "next/link";
import { profile } from "console";
import NavBar from "./_component/Navbar/page";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../theme";




const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
      <Provider store={store}>
    
     <body className={inter.className}>
       <NavBar/>
     
       {children}
       </body>
     </Provider>
      </ThemeProvider>
     
       
     
      </AppRouterCacheProvider>
  
     
    </html>
  );
}
