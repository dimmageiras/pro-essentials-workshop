const objOfFunctions = {
  string: (input: string) => input.toUpperCase(),
  number: (input: number) => input.toFixed(2),
  boolean: (input: boolean) => input,
};

const format = (input: string | number | boolean) => {
  const inputType = typeof input as "string" | "number" | "boolean";
  const formatter = objOfFunctions[inputType] as (
    inputValue: typeof input
  ) => string | boolean;

  return formatter(input);
};
