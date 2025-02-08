type MyObj = {
  foo: string;
  bar: number;
  baz: boolean;
};

const acceptsObj = (obj: MyObj) => {};

acceptsObj({
  foo: "",
  bar: 0,
  baz: false,
});

document.addEventListener("mousedown", (event) => {
  console.log(event);
});
