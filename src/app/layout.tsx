"use client"
import { Layout } from "antd";

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
