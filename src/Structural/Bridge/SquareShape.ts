import { ShapeBridge } from "./ShapeBridge";

export class SquareShape extends ShapeBridge{
        DrawShape(): string {
      return "square painted with color "+ this.color.getColor();
    }
}