interface ButtonAttributes {
  type: "button" | "submit" | "reset";
}

let type: ButtonAttributes[keyof ButtonAttributes] = "button";

const buttonAttributes: ButtonAttributes = {
  type,
};
