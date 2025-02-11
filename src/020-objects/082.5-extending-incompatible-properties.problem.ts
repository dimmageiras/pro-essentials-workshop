type Merge<X, Y> = {
  [K in keyof X | keyof Y]:
    | (K extends keyof X ? X[K] : never)
    | (K extends keyof Y ? Y[K] : never);
};

interface UserPart {
  id: string;
  name: string;
  age: number;
}

interface UserPart2 {
  id: number;
  phone: string;
}

interface User extends Merge<UserPart, UserPart2> {}

const user: User = {
  id: "1",
  name: "John",
  age: 20,
  phone: "123456789",
};
