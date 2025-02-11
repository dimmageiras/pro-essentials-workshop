import { Equal, Expect } from "@total-typescript/helpers";

interface UserNameAndEmail {
  name: string;
  email: string;
}

interface User extends UserNameAndEmail {
  id: string;
  role: string;
}

const fetchUser = async (): Promise<UserNameAndEmail> => {
  const response = await fetch("/api/user");
  const user: User = await response.json();

  return user;
};

const example = async () => {
  const user = await fetchUser();

  type test = Expect<Equal<typeof user, { name: string; email: string }>>;
};
