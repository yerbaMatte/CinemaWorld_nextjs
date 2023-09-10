import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '@/app/page';
import { AuthContextProvider } from '@/context/statusContext';
import '@testing-library/jest-dom';
import { basicFetch } from '@/api/fetchFunctions';

jest.mock('../api/fetchFunctions', () => ({
  basicFetch: jest.fn(), // Mock the API calls
}));

const mockFeaturedMovie = {
  id: 98,
  backdropPath: '/swpjSgGmBCx6QgfO4rgv5vBzqHL.jpg',
  title: 'Gladiator',
  overview:
    "In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos.  Maximus is one of the Roman army's most capable and trusted generals and a key advisor to the emperor.  As Marcus' devious son Commodus ascends to the throne, Maximus is set to be executed.  He escapes, but is captured by slave traders.  Renamed Spaniard and forced to become a gladiator, Maximus must battle to the death with other men for the amusement of paying audiences.",
  tagline: 'A hero will rise.',
  releaseDate: '2000-05-04',
  rating: 8.206,
};
const mockNowPlayingMovies = [
  {
    id: 1893,
    posterPath: '/6wkfovpn7Eq8dYNKaG5PY3q2oq6.jpg',
    backdropPath: '/wDe8LzwuvHYYiuwyNfxdYQq8ti4.jpg',
    title: 'Star Wars: Episode I - The Phantom Menace',
    releaseDate: '1999-05-19',
    rating: 6.532,
    synopsis:
      'Anakin Skywalker, a young slave strong with the Force, is discovered on Tatooine. Meanwhile, the evil Sith have returned, enacting their plot for revenge against the Jedi.',
    genres: [
      { id: 28, name: 'Action' },
      { id: 878, name: 'Science Fiction' },
    ],
  },
  {
    id: 672,
    posterPath: '/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg',
    backdropPath: '/1stUIsjawROZxjiCMtqqXqgfZWC.jpg',
    title: 'Harry Potter and the Chamber of Secrets',
    releaseDate: '2002-11-13',
    rating: 7.725,
    synopsis:
      'Cars fly, trees fight back, and a mysterious house-elf comes to warn Harry Potter at the start of his second year at Hogwarts. Adventure and danger await when bloody writing on a wall announces: The Chamber Of Secrets Has Been Opened. To save Hogwarts will require all of Harry, Ron and Hermione’s magical abilities and courage.',
    genres: [
      { id: 28, name: 'Action' },
      { id: 878, name: 'Science Fiction' },
    ],
  },
];

describe('Home Component', () => {
  beforeEach(() => {
    // Mock API responses
    (basicFetch as jest.Mock).mockResolvedValueOnce(mockFeaturedMovie);
    (basicFetch as jest.Mock).mockResolvedValueOnce(mockNowPlayingMovies);
  });

  it('renders featured movie and carousel', async () => {
    render(
      <AuthContextProvider>
        <Home />
      </AuthContextProvider>
    );
  });
});
