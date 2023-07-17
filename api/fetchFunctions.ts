import { Movies } from '../types/Movie';

export const basicFetch = async <returnType>(
  endpoint: string
): Promise<returnType> => {
  const response = await fetch(endpoint);

  if (response.status !== 200) {
    const error = await response.json();
    throw { message: error.message, status: error.code };
  }

  return response.json();
};

export const searchMovies = async (search = '', page = 1): Promise<Movies> => {
  // return await basicFetch<Movies>(`/api/movies?search=${search}&page=${page}`)
  return await basicFetch<Movies>(`/api/search?search=${search}&page=${page}`);
};

export const getGenres = async (genre = '', page = 1): Promise<Movies> => {
  return await basicFetch<Movies>(`/api/movies?genre=${genre}&page=${page}`);
};
