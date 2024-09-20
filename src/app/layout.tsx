"use client";
import HeaderC from "@/components/Header/HeaderC";
import "./globals.css";
import styles from "./layout.module.scss";
import { Layout } from "antd";
import FooterC from "@/components/Footer/FooterC";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { Header, Content, Footer } = Layout;
  return (
    <html lang="en">
      <body className={styles.body}>
        <Header>
          <HeaderC />
        </Header>
        <Content>{children}</Content>
        <Footer>
          <FooterC />
        </Footer>
      </body>
    </html>
  );
}
