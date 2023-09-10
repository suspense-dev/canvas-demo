import { EventName } from "./event.types";

export abstract class BaseEvent {
  name: EventName;

  protected constructor(name: EventName) {
    this.name = name;
  }
}

type BaseAppEventProps = {
  state: Readonly<AppState>;
}

export abstract class BaseAppEvent extends BaseEvent {
  state: AppState;

  protected constructor(name: EventName, { state }: BaseAppEventProps) {
    super(name);
    this.state = state;
  }
}
