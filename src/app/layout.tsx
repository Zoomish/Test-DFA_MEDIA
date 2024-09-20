"use client";
import HeaderC from "@/components/Header/HeaderC";
import "./globals.css";
import styles from "./layout.module.scss";
import FooterC from "@/components/Footer/FooterC";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body className={styles.body}>
          <header>
            <HeaderC />
          </header>
          <main>{children}</main>
          <footer>
            <FooterC />
          </footer>
        </body>
      </html>
    </QueryClientProvider>
  );
}
