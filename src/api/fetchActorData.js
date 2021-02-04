import { API_URL, API_KEY } from "../config";

export default async (actorId) => {
  const [actorResult] = await Promise.all([
    fetch(`${API_URL}person/${actorId}?api_key=${API_KEY}&language=en-US`),
  ]);

  const [actor] = await Promise.all([actorResult.json()]);

  return {
    actor,
  };
};
