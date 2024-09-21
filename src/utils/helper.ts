import { QueryClient } from "@tanstack/react-query";

export const getFromCache = (key: string, queryClient: QueryClient) => {
  return queryClient.getQueryData([key]);
};
