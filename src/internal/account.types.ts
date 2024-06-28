export type VerificationParams = {
  login: string;
  password: string;
};

export type GetUsersByFilterParams = {
  userIds?: string[];
  phones?: string[];
  login?: string;
};

export type GetUserResponse = {
  items: Account[];
  total: number;
};

export type Account = {
  userId: string;
  phone: string;
  login: string;
  firstName: string;
  lastName: string;
  middleName: string;
  password: string;
};
