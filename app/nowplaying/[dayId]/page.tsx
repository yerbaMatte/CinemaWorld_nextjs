import React from 'react';

function page({ params: { dayId } }: { params: { dayId: string } }) {
  return <div className="bg-white">{dayId}</div>;
}

export default page;
