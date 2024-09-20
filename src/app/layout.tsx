"use client";
import Header from "@/components/Header/Header";
import "./globals.css";
import styles from "./layout.module.scss";
import Footer from "@/components/Footer/Footer";
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
            <Header />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    </QueryClientProvider>
  );
}
