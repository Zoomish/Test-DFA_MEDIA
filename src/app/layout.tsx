import type { Metadata } from "next";
import "./globals.css";
import { Layout } from "antd";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { Header, Content, Footer } = Layout;
  return (
    <html lang="en">
      <body>
        <Header>Header</Header>
        <Content>{children}</Content>
        <Footer>Footer</Footer>
      </body>
    </html>
  );
}
