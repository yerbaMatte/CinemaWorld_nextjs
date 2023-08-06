'use client';

import React, { Dispatch, createContext, useReducer, useEffect } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import firebase_app from '@/firebase/config';
import { LoginStateType } from '@/types/Auth';

const auth = getAuth(firebase_app);

const initialState: LoginStateType = { isLoading: true, email: null };

type ActionType = {
  type: string;
  payload: {
    email: string | null;
  };
};

const reducer = (state: LoginStateType, action: ActionType) => {
  switch (action.type) {
    case 'STATUS':
      return { ...state, isLoading: !state.isLoading };
    case 'SET-USER':
      return { ...state, email: action.payload.email };
    default:
      return state;
  }
};

export const AppContext = createContext<{
  state: LoginStateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User is logged in');
        dispatch({
          type: 'SET-USER',
          payload: {
            email: user?.email,
          },
        });
      } else {
        console.log('There is no user');
      }
    });
    return () => subscribe();
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//
