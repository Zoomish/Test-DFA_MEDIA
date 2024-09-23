"use client";
import Header from "@/components/Header/Header";
import "./globals.scss";
import styles from "./layout.module.scss";
import Footer from "@/components/Footer/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter, usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { Provider } from "react-redux";
import { AppStore, makeStore } from "@/redux/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchIntervalInBackground: false,
          staleTime: 20_000,
          refetchOnWindowFocus: false,
        },
      },
    })
  );
  const router = useRouter();
  const location = usePathname();
  if (location === "/") {
    router.push("/movie");
  }
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  return (
    <Provider store={storeRef.current}>
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
    </Provider>
  );
}
