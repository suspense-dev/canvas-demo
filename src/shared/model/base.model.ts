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
      },
      selection: {
        selectionElements: toJS(BaseModel.models.SelectionModel.selectionElements)
      },
      tool: {
        activeTool: toJS(BaseModel.models.ToolbarModel.activeTool)
      }
    }
  }
}
