import { BaseEvent } from "./base-event";

type Handler<T> = (event: T) => void;

export class EventBus {
  static handlers: Record<string, Handler<BaseEvent>[]> = {};

  static fire<T extends BaseEvent>(event: T) {
    EventBus.handlers[event.name].forEach(handler => handler(event));
  }

  static on<T extends BaseEvent>(eventName: T['name'], handler: Handler<T>): () => void {
    if (!EventBus.handlers[eventName]) {
      EventBus.handlers[eventName] = [];
    }

    EventBus.handlers[eventName].push(handler as any);

    return () => EventBus.off(eventName, handler);
  }

  static off<T extends BaseEvent>(eventName: T['name'], handler: Handler<T>): void {
    const indexOfHandler = EventBus.handlers[eventName].indexOf(handler as any);

    if (indexOfHandler >= 0) {
      EventBus.handlers[eventName].splice(indexOfHandler, 1);
    }
  }
}
