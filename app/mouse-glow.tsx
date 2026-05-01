"use client";

import { useEffect } from "react";

export default function MouseGlow() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    function updatePointer(x: number, y: number) {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      frame = requestAnimationFrame(() => {
        root.style.setProperty("--cursor-x", `${x}px`);
        root.style.setProperty("--cursor-y", `${y}px`);
      });
    }

    function handlePointerMove(event: PointerEvent) {
      updatePointer(event.clientX, event.clientY);
    }

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return null;
}
