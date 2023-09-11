import { BaseElement, BaseElementProps, getCoordsOfAlignedElement, StrokeSharpness } from "../../../shared";
import { RoughGenerator } from "roughjs/bin/generator";
import { Drawable } from "roughjs/bin/core";
import { SELECTION_PADDING_BETWEEN_ELEMENT } from "./selection.constants";

type Props = PartialBy<BaseElementProps, 'width' | 'height'>;

export class SelectionElement extends BaseElement {
  targetElement: SceneElement;

  constructor(targetElement: SceneElement, props: Props) {
    super({
      ...props,
      width: targetElement.width + SELECTION_PADDING_BETWEEN_ELEMENT * 2,
      height: targetElement.height + SELECTION_PADDING_BETWEEN_ELEMENT * 2,
      styles: {
        strokeColor: 'blue'
      }
    });
    this.targetElement = targetElement;

    const { x, y } = getCoordsOfAlignedElement(this, targetElement);

    this.x = x;
    this.y = y;
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
