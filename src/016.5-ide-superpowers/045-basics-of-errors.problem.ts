// TypeScript sometimes warns you about
// things which will fail at runtime

const a: string | null = null;

(a as string | null)?.toString();

// But not everything it warns you
// about will fail at runtime

const obj: { foo?: string } = {};

obj.foo = "hello";

// It will try to warn you as close to
// the source of the problem as possible

type MyUser = {
  name: string;
};

const user: MyUser = {
  name: "Katherine",
};

// But sometimes that's not always possible

type FunctionThatReturnsAString = () => number;

const fn: FunctionThatReturnsAString = () => {
  return 123;
};
