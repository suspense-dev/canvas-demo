import { KeyboardEventName } from "./event.constants";
import { BaseEvent } from "./base-event";

type Props = {
  shift: boolean;
  alt: boolean;
  ctrl: boolean;
  key: string;
}

export class BaseKeyboardEvent extends BaseEvent {
  shift: boolean;
  alt: boolean;
  ctrl: boolean;
  key: string;

  constructor(name: KeyboardEventName, { shift, alt, ctrl, key }: Props) {
    super(name);
    this.shift = shift;
    this.alt = alt;
    this.ctrl = ctrl;
    this.key = key;
  }
}

export class KeyDownEvent extends BaseKeyboardEvent {
  constructor(props: Props) {
    super(KeyboardEventName.KeyDown, props);
  }
}
