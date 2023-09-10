import { Drawable } from "roughjs/bin/core";
import { RoughGenerator } from "roughjs/bin/generator";
import { DEFAULT_RECTANGLE_SIZE } from "./rectangle.constants";
import { BaseElement, BaseElementProps, StrokeSharpness } from "../../../shared";

export class RectangleElement extends BaseElement {
  constructor(props: PartialBy<BaseElementProps, 'width' | 'height'>) {
    super({
      ...props,
      width: DEFAULT_RECTANGLE_SIZE.width,
      height: DEFAULT_RECTANGLE_SIZE.height,
    });
  }

  getDrawableShape(generator: RoughGenerator): Drawable {
    if (this.styles.strokeSharpness === StrokeSharpness.Round) {
      const w = this.width;
      const h = this.height;
      const r = Math.min(w, h) * 0.25;

      return generator.path(
        `M ${r} 0 L ${w - r} 0 Q ${w} 0, ${w} ${r} L ${w} ${
          h - r
        } Q ${w} ${h}, ${w - r} ${h} L ${r} ${h} Q 0 ${h}, 0 ${
          h - r
        } L 0 ${r} Q 0 0, ${r} 0`,
        this.getDrawableProps(true),
      );
    }

    return generator.rectangle(0, 0, this.width, this.height, this.getDrawableProps());
  }
}
