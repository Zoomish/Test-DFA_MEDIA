export const handleResponse = async (response: Response) => {
  if (response.ok) return await response.json();
  else if (response.status === 401) {
    localStorage.removeItem("token");
    location.reload();
  } else return await Promise.reject(response.status);
};
