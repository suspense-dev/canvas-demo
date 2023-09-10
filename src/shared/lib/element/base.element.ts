import { nanoid } from "nanoid";
import { ElementStyles, StrokeSharpness, StrokeStyle } from "./element.types";
import { Drawable, Options } from "roughjs/bin/core";
import { RoughGenerator } from "roughjs/bin/generator";
import { RoughCanvas } from "roughjs/bin/canvas";
import rough from "roughjs/bin/rough";

export type BaseElementProps = {
  id?: string;
  width: number,
  height: number;
  x: number;
  y: number;
  styles?: ElementStyles;
  boundElements?: BaseElement[];
}

type VirtualCanvas = {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  rc: RoughCanvas;
}

export abstract class BaseElement {
  readonly id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  styles: ElementStyles;
  boundElements: BaseElement[];
  drawableShape: Drawable | null = null;
  protected virtualCanvas!: VirtualCanvas;

  abstract getDrawableShape(generator: RoughGenerator): Drawable;

  protected constructor({ id, x, y, width, height, styles, boundElements }: BaseElementProps) {
    this.id = id ?? nanoid();
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.styles = styles ?? {
      strokeSharpness: StrokeSharpness.Sharp,
      strokeStyle: StrokeStyle.Solid,
      strokeColor: 'black',
      strokeWidth: 1,
    };
    this.boundElements = boundElements ?? [];

    this.initializeVirtualCanvas();
  }

  resize({ width, height }: Partial<Size>) {
    this.width = width ?? this.width;
    this.height = height ?? this.height;
  }

  moveTo({ x, y }: Coords) {
    this.x = x;
    this.y = y;
  }

  moveBy({ x, y }: Coords) {
    this.x += x;
    this.y += y;
  }

  public render(context: CanvasRenderingContext2D): void {
    const { canvas: virtualCanvas } = this.virtualCanvas;

    context.drawImage(virtualCanvas, this.x, this.y, this.width, this.height)
  }

  protected initializeVirtualCanvas(): void {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d")!;
    const rc = rough.canvas(canvas);

    canvas.width = this.width;
    canvas.height = this.height;

    this.virtualCanvas = { canvas, context, rc };

    this.renderToVirtualCanvas(rc);
  }

  protected renderToVirtualCanvas(rc: RoughCanvas): void {
    if (!this.drawableShape) {
      this.drawableShape = this.getDrawableShape(rc.generator);
    }

    rc.draw(this.drawableShape);
  }

  protected getDrawableProps(continuousPath = false): Options {
    return {
      disableMultiStroke: this.styles.strokeStyle !== StrokeStyle.Solid,
      strokeWidth: this.styles.strokeStyle !== StrokeStyle.Solid && this.styles.strokeWidth ? this.styles.strokeWidth + 0.5 : this.styles.strokeWidth,
      stroke: this.styles.strokeColor,
      preserveVertices: continuousPath,
      roughness: 0
    };
  }
}
