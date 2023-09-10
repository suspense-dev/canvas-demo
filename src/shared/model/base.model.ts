import { toJS } from "mobx";

export abstract class BaseModel {
  private static models: Models = {} as Models; // IoC Container of modules

  protected constructor(modelName: keyof Models) {
    (BaseModel.models as any)[modelName] = this;
  }

  get appState(): AppState {
    return {
      scene: {
        elements: toJS(BaseModel.models.SceneModel.elements),
        selectedElements: toJS(BaseModel.models.SceneModel.selectedElements)
      },
      tool: {
        activeTool: toJS(BaseModel.models.ToolbarModel.activeTool)
      }
    }
  }
}
