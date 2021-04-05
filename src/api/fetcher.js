import { API_URL, API_KEY } from "../config";

export default async ({ prefix, id, routeName, keyName }) => {
  const result = await fetch(
    `${API_URL}${prefix}/${id}${routeName}?api_key=${API_KEY}&language=en-US`
  );

  return result.json();
};
