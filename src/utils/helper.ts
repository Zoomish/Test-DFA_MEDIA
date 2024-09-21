import { useQueryClient } from "@tanstack/react-query";

export const getFromCache = (key: string) => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData([key]);
};
