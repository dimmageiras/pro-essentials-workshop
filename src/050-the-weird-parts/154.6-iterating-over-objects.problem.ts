import { expect, it, vitest } from "vitest";

type User = {
  id: number;
  name: string;
};

function getObjectKeys<T extends Record<PropertyKey, unknown>>(
  initialObject: T
): (keyof T)[] {
  return Object.keys(initialObject);
}

function printUser(user: User) {
  getObjectKeys(user).forEach((key) => {
    console.log(user[key]);
  });
}

it("Should log all the keys of the user", () => {
  const consoleSpy = vitest.spyOn(console, "log");

  printUser({
    id: 1,
    name: "Waqas",
  });

  expect(consoleSpy).toHaveBeenCalledWith(1);
  expect(consoleSpy).toHaveBeenCalledWith("Waqas");
});
