import { useEffect, MutableRefObject } from "react";
import { SceneModel } from "../model";
import { autorun } from "mobx";

export const useRenderElementsToScene = (canvasRef: MutableRefObject<HTMLCanvasElement | null>) => {
  useEffect(() => {
    const off = autorun(() => {
      const canvas = canvasRef.current;

      if (!canvas) return;

      const ctx = canvas.getContext('2d');

      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      SceneModel.elements.forEach(element => element.render(ctx))
    })

    return () => {
      off();
    }
  }, [canvasRef]);
}
