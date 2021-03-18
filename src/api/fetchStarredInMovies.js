import { API_URL, API_KEY } from "../config";

export default async (personId) => {
  const movieResult = await fetch(
    `${API_URL}person/${personId}/movie_credits?api_key=${API_KEY}`
  );

  const results = await movieResult.json();

  let movieNamesStarredIn = [];

  if (results.cast) {
    for (let movie of results.cast) {
      console.log(movie);
    }
  }

  return {
    movies: results,
  };
};
