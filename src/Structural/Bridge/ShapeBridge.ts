import { IColor } from "./IColor"

export abstract class ShapeBridge {
  color: IColor;

  constructor(color: IColor) {
    this.color = color;
  }

  abstract DrawShape(): string;
}