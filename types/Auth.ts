export type UserType = {
  email: string;
  password: string;
};

export type LoginStateType = {
  isLoading: boolean | undefined;
  email: string | null | undefined;
};
