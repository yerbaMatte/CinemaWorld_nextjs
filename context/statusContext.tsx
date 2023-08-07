'use client';

import React, { Dispatch, createContext, useReducer, useEffect } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import firebase_app from '@/firebase/config';
import { LoginStateType } from '@/types/Auth';

const auth = getAuth(firebase_app);

const initialState: LoginStateType = { isLoading: true, email: null };

type ActionType = {
  type: string;
  payload?: Partial<{
    email: string | null;
    isLoading: boolean;
  }>;
};

const reducer = (state: LoginStateType, action: ActionType) => {
  switch (action.type) {
    case 'STATUS':
      return { ...state, isLoading: action.payload.isLoading };
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
        dispatch({
          type: 'SET-USER',
          payload: {
            email: user?.email,
          },
        });
        dispatch({ type: 'STATUS', payload: { isLoading: false } });
      } else {
        dispatch({ type: 'STATUS', payload: { isLoading: false } });
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
