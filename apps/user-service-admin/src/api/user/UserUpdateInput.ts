import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  phone?: string | null;
  roles?: InputJsonValue;
  socialMediaAccounts?: InputJsonValue;
  telegramAccount?: string | null;
  username?: string;
};
