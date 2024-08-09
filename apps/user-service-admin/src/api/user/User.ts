import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  roles: JsonValue;
  socialMediaAccounts: JsonValue;
  telegramAccount: string | null;
  updatedAt: Date;
  username: string;
};
