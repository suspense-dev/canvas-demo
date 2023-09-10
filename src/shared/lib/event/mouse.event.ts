import { MouseEventName } from "./event.constants";
import { BaseEvent } from "./base-event";

type Props = {
  x: number;
  y: number;
}

export class BaseMouseEvent extends BaseEvent {
  x: number;
  y: number;

  constructor(name: MouseEventName, { x, y }: Props) {
    super(name);
    this.x = x;
    this.y = y;
  }
}

export class MouseDownEvent extends BaseMouseEvent {
  constructor(props: Props) {
    super(MouseEventName.MouseDown, props);
  }
}

export class MouseUpEvent extends BaseMouseEvent {
  constructor(props: Props) {
    super(MouseEventName.MouseUp, props);
  }
}

export class MouseMoveEvent extends BaseMouseEvent {
  constructor(props: Props) {
    super(MouseEventName.MouseMove, props);
  }
}
