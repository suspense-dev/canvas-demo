import { useEffect, MutableRefObject } from "react";
import { autorun } from "mobx";

export const useRenderElements = (canvasRef: MutableRefObject<HTMLCanvasElement | null>, elements: DrawableElement[]) => {
  useEffect(() => {
    const off = autorun(() => {
      const canvas = canvasRef.current;

      if (!canvas) return;

      const ctx = canvas.getContext('2d');

      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      elements.forEach(element => element.render(ctx))
    })

    return () => {
      off();
    }
  }, [canvasRef, elements]);
}
