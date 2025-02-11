import { Equal, Expect } from "@total-typescript/helpers";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

type UserNameAndEmail = Pick<User, "name" | "email">;

const fetchUser = async (): Promise<UserNameAndEmail> => {
  const response = await fetch("/api/user");
  const user: User = await response.json();

  return user;
};

const example = async () => {
  const user = await fetchUser();

  type test = Expect<Equal<typeof user, { name: string; email: string }>>;
};
