import type { Metadata } from "next";
import "@/app/globals.css";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const product = await fetch(`http://localhost:3001/products/${id}`);
  const resMetadata = await product.json();

  return {
    title: resMetadata.title,
    description: resMetadata.description,
  };
}

export default function FilmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
