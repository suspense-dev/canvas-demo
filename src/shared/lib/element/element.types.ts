export enum StrokeSharpness {
  Round = "round",
  Sharp = "sharp",
}

export enum StrokeStyle {
  Solid = "solid",
  Dashed = "dashed",
  Dotted = "dotted",
}

export type ElementStyles = {
  strokeSharpness?: StrokeSharpness;
  strokeStyle?: StrokeStyle;
  strokeColor?: string;
  strokeWidth?: number;
}
