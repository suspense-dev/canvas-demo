import { SceneEventName } from "./event.constants";
import { BaseAppEvent } from "./base-event";

type DrawElementEventProps = {
  element: SceneElement,
  state: AppState,
}
type RedrawElementEventProps = {
  prevElement: SceneElement;
  currentElement: SceneElement;
  state: AppState;
}
type RemoveElementEventProps = {
  element: SceneElement,
  state: AppState,
}

export class DrawElementEvent extends BaseAppEvent {
  element: SceneElement;

  constructor({ element, ...props }: DrawElementEventProps) {
    super(SceneEventName.DrawElement, props);
    this.element = element;
  }
}

export class RedrawElementEvent extends BaseAppEvent {
  prevElement: SceneElement;
  currentElement: SceneElement;

  constructor({ prevElement, currentElement, ...props }: RedrawElementEventProps) {
    super(SceneEventName.DrawElement, props);
    this.prevElement = prevElement;
    this.currentElement = currentElement;
  }
}

export class RemoveElementEvent extends BaseAppEvent {
  element: SceneElement;

  constructor({ element, ...props }: RemoveElementEventProps) {
    super(SceneEventName.RemoveElement, props);
    this.element = element;
  }
}
