export type UserType = {
  email: string;
  password: string;
};

export type LoginStateType = {
  isLoading: boolean;
  email: string | null;
};
