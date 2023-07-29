import React from 'react';
import MovieCard from '../components/MovieCard';
import { schedule } from '@/utils/helpers';

function DayListPage({ params: { dayId } }: { params: { dayId: string } }) {
  const { mapOfDays } = schedule();

  console.log(mapOfDays.values());

  if (![...mapOfDays.values()].includes(dayId)) {
    throw new Error('There is no such a resource to display');
  }

  return (
    <>
      <MovieCard />
    </>
  );
}

export default DayListPage;
