"use client";
import Header from "@/components/Header/Header";
import "./globals.scss";
import styles from "./layout.module.scss";
import Footer from "@/components/Footer/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter, usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  const router = useRouter();
  const location = usePathname();
  if (location === "/") {
    router.push("/movie");
  }
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
