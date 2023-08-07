'use client';

import { AppContext } from '@/context/statusContext';
import React, { useContext } from 'react';

function MyAccountPage() {
  const { state, dispatch } = useContext(AppContext);
  const userEmail = state?.email;

  return <div className="bg-white text-black">{userEmail}</div>;
}

export default MyAccountPage;
