import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://api.github.com/repos/TanStack/query").then((res) =>
        res.json()
      ),
  });
  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return <div>{data}</div>;
}
