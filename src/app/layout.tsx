"use client"
import "./globals.css";
import styles from "./layout.module.scss";
import { Layout } from "antd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { Header, Content, Footer } = Layout;
  return (
    <html lang="en">
      <body className={styles.body}>
        <Header>Header</Header>
        <Content>{children}</Content>
        <Footer>Footer</Footer>
      </body>
    </html>
  );
}
