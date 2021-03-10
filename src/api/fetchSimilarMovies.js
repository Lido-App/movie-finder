import { API_URL, API_KEY } from "../config";

export default async (movieId) => {
  const movieResult = await fetch(
    `${API_URL}movie/${movieId}/similar?api_key=${API_KEY}`
  );

  const { results } = await movieResult.json();

  return {
    movies: results,
  };
};
