import useSWR from "swr";

import { getAuthToken } from "~/libs/backend/src/services";

export const useAuthToken = () => {
  const response = useSWR("/api/token", getAuthToken);

  return response;
};
