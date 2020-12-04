import { API_URL, API_KEY } from "../config";

export default async (movieId) => {
  const [movieResult, actorResult] = await Promise.all([
    fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`),
    fetch(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`),
  ]);

  const [movie, { cast: actors, crew }] = await Promise.all([
    movieResult.json(),
    actorResult.json(),
  ]);

  return {
    movie,
    actors,
    directors: crew.filter((member) => member.job === "Director"),
  };
};
