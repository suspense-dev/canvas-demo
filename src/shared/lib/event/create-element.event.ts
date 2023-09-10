import { Event } from "./event.types";
import { CreateElementEventName } from "./event.constants";
import { BaseAppEvent } from "./base-event";

type CreateRectangleEventProps = {
  x: number;
  y: number;
  state: AppState;
}

export class CreateRectangleEvent extends BaseAppEvent {
  x: number;
  y: number;

  constructor({ x, y, ...props }: CreateRectangleEventProps) {
    super(CreateElementEventName.CreateElementRectangle, props);
    this.x = x;
    this.y = y;
  }
}

export const isCreateRectangleEvent = (event: Event): event is CreateRectangleEvent => {
  return event instanceof CreateRectangleEvent;
}
