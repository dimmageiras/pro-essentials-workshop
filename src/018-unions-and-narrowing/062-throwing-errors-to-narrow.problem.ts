import { Equal, Expect } from "@total-typescript/helpers";

const appElement = document.getElementById("app");

// How do I ensure that appElement is defined?
if (!appElement) throw new Error("Could not find element with 'app' id");

type Test = Expect<Equal<typeof appElement, HTMLElement>>;
