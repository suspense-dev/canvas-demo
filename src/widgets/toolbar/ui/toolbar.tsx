import { Tool, ToolbarModel } from "../model/toolbar.model";
import { observer } from "mobx-react";

export const Toolbar = observer(() => {
  const style = { opacity: 0.5 };

  return (
    <div>
      <button
        style={ToolbarModel.activeTool === Tool.Selection ? {} : style}
        onClick={() => ToolbarModel.setActiveTool(Tool.Selection)}
      >
        Selection
      </button>
      <button
        style={ToolbarModel.activeTool === Tool.Rect ? {} : style}
        onClick={() => ToolbarModel.setActiveTool(Tool.Rect)}
      >
        Rect
      </button>
    </div>
  )
})
