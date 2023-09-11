import { RectangleElement } from "../../entities/rectangle";
import { Tool, ToolbarModel } from "../../widgets/toolbar";
import { SceneModel } from "../../entities/scene";
import { RectangleModel } from "../../entities/rectangle";
import { SelectionModel } from "../../features/selection";
import { SelectionElement } from "../../features/selection/lib/selection.element";

declare global {
  type ImmutablePrimitive = undefined | null | boolean | string | number | Function;

  type Immutable<T> =
    T extends ImmutablePrimitive ? T :
      T extends Array<infer U> ? ImmutableArray<U> :
        T extends Map<infer K, infer V> ? ImmutableMap<K, V> :
          T extends Set<infer M> ? ImmutableSet<M> : ImmutableObject<T>;

  export type ImmutableArray<T> = ReadonlyArray<Immutable<T>>;
  export type ImmutableMap<K, V> = ReadonlyMap<Immutable<K>, Immutable<V>>;
  export type ImmutableSet<T> = ReadonlySet<Immutable<T>>;
  type ImmutableObject<T> = { readonly [K in keyof T]: Immutable<T[K]> };

  type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

  type Coords = {
    x: number,
    y: number,
  }

  type Size = {
    width: number;
    height: number;
  }

  type SceneElement = RectangleElement;
  type DrawableElement = RectangleElement | SelectionElement;

  type AppState = Immutable<{
    scene: {
      elements: SceneElement[];
    },
    selection: {
      selectionElements: SelectionElement[];
    },
    tool: {
      activeTool: Tool;
    }
  }>

  type Models = {
    ToolbarModel: typeof ToolbarModel,
    SceneModel: typeof SceneModel,
    RectangleModel: typeof RectangleModel,
    SelectionModel: typeof SelectionModel,
  }
}
