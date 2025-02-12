interface ShapeOptions {
  x: number;
  y: number;
}

type IShape = {
  position: { x: number; y: number };
  move: (deltaX: number, deltaY: number) => void;
};

// How do we ensure our Shape class matches IShape?
class Shape implements IShape {
  #x;
  #y;

  constructor({ x, y }: ShapeOptions = { x: 0, y: 0 }) {
    this.#x = x;
    this.#y = y;
  }

  get position() {
    return {
      x: this.#x,
      y: this.#y,
    };
  }

  move(x: number, y: number) {
    this.#x = x;
    this.#y = y;
  }
}
