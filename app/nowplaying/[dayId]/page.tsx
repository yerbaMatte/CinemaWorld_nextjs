import React from 'react';
import MovieCard from '../components/MovieCard';

const days: { [key: string]: string } = {
  mon: 'MONDAY!',
  tue: '',
  wed: '',
  thu: '',
  fri: '',
  sat: '',
  sun: '',
};

function DayListPage({ params: { dayId } }: { params: { dayId: string } }) {
  if (days[dayId] === undefined) {
    throw new Error('There is no such a resource to display');
  }

  return (
    <>
      <MovieCard />
    </>
  );
}

export default DayListPage;
