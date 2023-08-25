import Home from '@/app/page';
import { render, screen } from '@testing-library/react';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Manually configure Firebase for testing
const testFirebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY, // Replace with your test API key
  // Other configuration options...
};
const testFirebaseApp = initializeApp(testFirebaseConfig);
const testAuth = getAuth(testFirebaseApp);

describe('Home Page - Rendering', () => {
  it('should have hero header text');
  render(<Home />);
  screen.getByText('Gladiator');
});
