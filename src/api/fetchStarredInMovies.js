import { API_URL, API_KEY } from "../config";

export default async (personId) => {
  const movieResult = await fetch(
    `${API_URL}person/${personId}/movie_credits?api_key=${API_KEY}`
  );

  const raw = await movieResult.json();
  const credits = raw.crew.reduce((credits, role) => {
    credits[role.department] = (credits[role.department] ?? []).concat([role]);
    return credits;
  }, { Cast: raw.cast });


  return {
    credits,
  };
};
