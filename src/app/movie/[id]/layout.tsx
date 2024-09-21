import type { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  return {
    title: id,
  };
}

export default function FilmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
