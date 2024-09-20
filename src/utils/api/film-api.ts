import { BASE_URL } from "../const";
import { handleResponse } from "../helpers";

export const getAdmin = async (token: string, id: string) => {
  return await fetch(`${BASE_URL}/admin/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(async (res) => await handleResponse(res));
};
