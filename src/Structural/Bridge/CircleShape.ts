import { ShapeBridge } from "./ShapeBridge";

export class CircleShape extends ShapeBridge{
        DrawShape(): string {
      return "circle painted with color "+ this.color.getColor();
    }
}